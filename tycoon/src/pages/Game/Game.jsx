/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-self-assign */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Confetti from 'react-confetti';
import './Game.css';
import loadPlayers from '../../redux/actions/actionCreator';
import BoardPlayer from '../../const/Board';
import BootLogo from '../../assets/Boot.png';
import IronLogo from '../../assets/Iron.png';
import HatStandLogo from '../../assets/Hat_Stand.png';
import MobilePhoneLogo from '../../assets/Mobile Phone.png';
import ShipLogo from '../../assets/Ship.png';
import CatLogo from '../../assets/Cat.png';

function Game() {
  // list of hooks to manage the game states
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedPlayer, selectPlayer] = useState(null);
  const [showGame, setShowGame] = useState(false);
  const [gameMode, setGameMode] = useState(false);
  const [showWinner, setShowWinner] = useState(false);
  const [gameStarted, setStartGame] = useState(false);
  const [playerPlayingGame, setPlayersPlaying] = useState([]);
  const [timeout, setTime] = useState([]);
  const dispatch = useDispatch();
  const [endQuickMode, setEndQuickMode] = useState(false);
  const {
    theBoard, players, throwDice, buyProperty,
    switchPlayer, message, message1, message2,
  } = BoardPlayer;
  const [playerNumber, setPlayerNumber] = useState(0);
  const [palyerstoShow, setPlayersToShow] = useState([
    {
      name: 'Boot',
      img: BootLogo,
      id: 1,
      isSelected: false,
      title: 'boot',
    },
    {
      name: 'Iron',
      img: IronLogo,
      id: 2,
      isSelected: false,
      title: 'iron',
    },
    {
      name: 'Hat Stand',
      img: HatStandLogo,
      id: 3,
      isSelected: false,
      title: 'HatStand',
    },
    {
      name: 'Mobile Phone',
      img: MobilePhoneLogo,
      id: 4,
      isSelected: false,
      title: 'Mobile Phone',
    },
    {
      name: 'Ship',
      img: ShipLogo,
      id: 5,
      isSelected: false,
      title: 'Ship',
    },
    {
      name: 'Cat',
      img: CatLogo,
      id: 6,
      isSelected: false,
      title: 'Cat',
    },
  ]);

  // check for winner in classic mode and is called every time the dice is thrown
  function checkForWinner() {
    for (let i = 0; i <= playerPlayingGame.length - 1; i += 1) {
      let bankrupted = 0;
      if (playerPlayingGame[i].player.isBankrupt == true) {
        bankrupted = +1;
      }
      if (bankrupted == playerPlayingGame.length - 1) {
        setShowWinner(true);
      }
    }
  }
  // check if property is owned and if so, it will display the owned properties
  // and by who. This will added feature in next versions

  let propertiesOwened = {};
  function checkPropertyOwnerShip() {
    for (let i = 0; i <= theBoard.length - 1; i += 1) {
      if (theBoard[i].purchased === true) {
        propertiesOwened += theBoard[i];
      }
    }

    return propertiesOwened;
  }
  // function thwo dice will throw the dice, check for winner, check propery ownership
  function throwDices() {
    setPlayerNumber(playerNumber + 1 < playerPlayingGame.length ? playerNumber + 1 : 0);
    throwDice();
    checkForWinner();
    checkPropertyOwnerShip();
  }
  // when time is out on quick mode this function will end the game and display the players
  const quickModeResult = () => {
    setEndQuickMode(true);
  };
  // this allow computer or ai player to make automatic moves
  const computerMode = playerPlayingGame.some(
    (player) => player.type.toLowerCase() === 'computer',
  );
  if (computerMode && gameStarted) {
    throwDice();
    switchPlayer();
  }
  // control input data and ensure both human and ai are playing
  const haveBothTypeofPlayers = () => {
    const haveComputer = playerPlayingGame.some(
      (player) => player.type.toLowerCase() === 'computer',
    );
    const haveHuman = playerPlayingGame.some(
      (player) => player.type.toLowerCase() === 'human',
    );
    if (haveComputer && haveHuman) {
      return true;
    }
    return false;
  };
  // use effect is used to detect any change on the players
  useEffect(() => {
    players[playerNumber];
    selectPlayer();
  }, []);

  // useEffect is used to detect changes on time input
  useEffect(() => {
    if (gameMode === 'quick') {
      setTimeout(() => {
        // end game function call
        quickModeResult();
      }, 1000 * 60 * 30);
    }
  }, [gameMode, timeout]);

  // add players into the playing players list
  const addintoPlayersList = (newPlayer) => {
    if (!playerPlayingGame.some(({ player }) => player.id === newPlayer.player.id)) {
      setPlayersPlaying([...playerPlayingGame, newPlayer]);
    }
  };
  // order the player by number of money on their bank
  const playerPlayingSortedList = playerPlayingGame.slice(0);
  // eslint-disable-next-line max-len
  playerPlayingSortedList.sort((firstplayer, lastplayer) => lastplayer.player.money - firstplayer.player.money);
  console.log(playerPlayingSortedList);
  return (
    <div className="game">
      {showGame && showWinner === false ? (
        <div className="secondWindow">
            <div className="loader-wrapper">
                <div className="loader">
                  <div className="loader loader-inner" />
                </div>
            </div>
              <div className="boardGameSec">
                <div className="dice">
                  <div className="diceContainer">
                    <div className="diceOne" />
                    <div className="diceTwo" />
                  </div>
                </div>
                <div id="board" className="board">
                  <div className="top">
                    <div id="20" className={`parking corner playerimage ${playerPlayingGame[playerNumber].player.currentSpace == 20 ? `playerimage player${playerNumber}` : ''}`} />
                    {Array.from(Array(9).keys()).map((item) => (
                      <div key={item} id={item + 21} className={`horizontal ${playerPlayingGame[playerNumber].player.currentSpace == item + 21 ? `playerimage player${playerNumber}` : ''}`} />
                    ))}
                    <div id="0" className="jail corner" />
                  </div>
                  <div className="mid">
                    <div className="mid-left">
                      {Array.from(Array(8).keys()).map((item) => (
                        // eslint-disable-next-line eqeqeq
                        <div key={item} id={item + 11} className={`vertical ${playerPlayingGame[playerNumber].player.currentSpace == item + 11 ? `playerimage player${playerNumber}` : ''}`} />
                      ))}
                    </div>
                    <div className="mid-mid" />
                    <div className="mid-right">
                      {Array.from(Array(9).keys()).map((item) => (
                        <div key={item} id={item + 30} className={`vertical ${playerPlayingGame[playerNumber].player.currentSpace == item + 30 ? `playerimage player${playerNumber}` : ''}`} />
                      ))}
                    </div>
                  </div>
                  <div className="bottom">
                    <div id="0" className="jail corner" />
                    {Array.from(Array(9).keys()).map((item) => (
                      <div key={item} id={item + 2} className={`vertical ${playerPlayingGame[playerNumber].player.currentSpace == item + 2 ? `playerimage player${playerNumber}` : ''}`} />
                    ))}
                    <div id="1" className={`collect corner ${playerPlayingGame[playerNumber].player.currentSpace == 1 ? `playerimage player${playerNumber}` : ''}`} />
                  </div>
                </div>
                <div className="dialogPlayer">
                  <div className="dialogInfo">
                    {loadPlayers}
                    {playerPlayingGame[playerNumber].player.name}
                    {' '}
                    is on
                    {' '}
                    {theBoard[players[playerNumber].currentSpace].name}
                    {' '}
                    and has
                    {' '}
                    {playerPlayingGame[playerNumber].player.money}
                  </div>
                  <div className="dialogAction">
                    <button
                      type="button"
                      className="buttonAction bntGame1"
                      onClick={() => {
                        // eslint-disable-next-line max-len
                        players[playerNumber].buyProperty(theBoard[players[playerNumber].currentSpace]);
                      }}
                    >
                      Buy Property
                    </button>
                    <button
                      type="button"
                      className="buttonAction bntGame1"
                      onClick={() => {
                        setShowWinner(true);
                      }}
                    >
                      End Game
                    </button>
                    <button
                      type="button"
                      className="diceBnt bntGame1"
                      onClick={() => throwDices()}
                    >
                    Throw Dice
                    </button>
                  </div>
                </div>
              </div>
              <div className="infoWindow">
                <div className="playerList">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Player Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Property</th>
                        <th scope="col">Type</th>
                        <th scope="col">Space</th>
                      </tr>
                    </thead>
                    <tbody>
                      {playerPlayingSortedList.length
                          && playerPlayingGame.map((player) => (
                            <tr key={`player${`${player.player.id + Math.random()}`}`}>
                              <td>{player.player.name}</td>
                              <td>{player?.player?.money}</td>
                              <td>{player?.player?.properties.length}</td>
                              <td>{player.type}</td>
                              <td>{player.player.currentSpace}</td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
                <div className="playerDetails">
                  <p>Player Playig:</p>
                  <div className="playerContainer">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Player Name</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Properties</th>
                          <th scope="col">Type</th>
                          <th scope="col">Space</th>
                        </tr>
                      </thead>
                      <tbody>
                        {<tr key={selectedPlayer.player.id}>
                          <td className="d-flex align-items-center">
                            {' '}
                            <div className="playerlogo">
                              <img
                                className="logo"
                                src={players[playerNumber].logo}
                                width="60rem"
                                height="60rem"
                                alt="logo"
                              />
                            </div>
                            {players[playerNumber].name}
                          </td>
                          <td>{players[playerNumber].money}</td>
                          <td>{players[playerNumber].properties.length}</td>

                          <td>{players[playerNumber].type}</td>
                          <td>{players[playerNumber].currentSpace}</td>
                         </tr>}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

        </div>
      ) : showGame && showWinner && gameMode === 'quick' ? (

        <div className="showScore">
              <Confetti
                width={1800}
                height={1400}
              />
           <div className="playerList">
           <h2>The Result of the Quick Mode</h2>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Player Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Property</th>
                        <th scope="col">Type</th>
                        <th scope="col">Space</th>
                      </tr>
                    </thead>
                    <tbody>
                      {playerPlayingSortedList.length
                          && playerPlayingSortedList.map((player) => (
                            <tr key={`player${`${player.player.id + Math.random()}`}`}>
                              <td>{player.player.name}</td>
                              <td>{player.player.money}</td>
                              <td>{player.player.properties.length}</td>
                              <td>{player.type}</td>
                              <td>{player.player.currentSpace}</td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
           </div>
        </div>

      ) : showGame && showWinner && gameMode === 'classic' ? (

        <div className="showScore">
              <Confetti
                width={1800}
                height={1400}
              />
          <div className="showDetails">
              <h2>The Winner of the Classic Mode</h2>
              <div className="showContainer">
                <table className="tableShowScore">
                  <thead>
                    <tr>
                      <th scope="col">player name</th>
                      <th scope="col">amount</th>
                      <th scope="col">properties</th>
                      <th scope="col">type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {<tr key={selectedPlayer.player.id}>
                      <td className="d-flex align-items-center">
                        {' '}
                        <div className="playerlogo">
                          <img
                            className="logo"
                            src={players[playerNumber].logo}
                            width="60rem"
                            height="60rem"
                            alt="logo"
                          />
                        </div>
                        {players[playerNumber].name}
                      </td>
                      <td>{players[playerNumber].money}</td>
                      <td>{players[playerNumber].properties.length}</td>

                      <td>{players[playerNumber].type}</td>
                     </tr>}
                  </tbody>
                </table>
              </div>
          </div>
        </div>

      ) : (
        <div className="firstWindow">
          <div className="text-center">
          <h5>Game Menu</h5>
          </div>
          <div className="menu">
            <div className="humanPlayers">
              <h5>Human Players</h5>
              {palyerstoShow.map((item, index) => (
                <button
                  key={`button${index + 1}`}
                  disabled={selectedButton === `ai${item.title}`}
                  type="button"
                  onClick={() => {
                    addintoPlayersList(
                      { player: players[index], type: 'Human' },
                    );
                    setSelectedButton(`human${item.title}`);
                    selectPlayer({ player: players[index], type: 'Human' });
                  }}
                  className={`btngame text-capitalize ${item.title}`}
                >
                  <img
                    className="logo"
                    src={players[index].logo}
                    width="60rem"
                    height="60rem"
                    alt="logo"
                  />
                  {item.name}
                </button>
              ))}
            </div>
            <div className="aiPlayers">
              <h5>AI Players</h5>
              {palyerstoShow.map((item, index) => (
                <button
                  key={`button${index + 1}`}
                  type="button"
                  disabled={selectedButton === `human${item.title}`}
                  onClick={() => {
                    addintoPlayersList(
                      { player: players[index], type: 'Computer' },
                    );
                    setSelectedButton(`ai${item.title}`);
                    selectPlayer({ player: players[index], type: 'Computer' });
                  }}
                  className={`btngame text-capitalize ${item.title}`}
                >
                  <img
                    className="logo"
                    src={players[index].logo}
                    width="60rem"
                    height="60rem"
                    alt="logo"
                  />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="gridBard" />
          <div className="rules">
            <div className="gameRules">
              <h4>Game Mode</h4>
            </div>
            <div className="gameRulesBnt">
            <div className="classic">
              <button
                type="button"
                className="classicBnt"
                onClick={() => { setGameMode('classic'); setStartGame(true); }}
              >
                Classic
              </button>
            </div>
            <div className="quick">
              <button
                type="button"
                className="quickBnt"
                onClick={() => { setGameMode('quick'); setStartGame(true); }}
              >
                Quick
              </button>
            </div>
            </div>
          </div>
          {
            gameMode === 'quick' && (
              <div className="timeContainer">
              <input type="time" className="timeInput" value={timeout} onChange={(e) => { setTime(e.target.value); }} />
              </div>
            )
          }
          {haveBothTypeofPlayers() && (
            <div className="starGame">
              <button
                type="button"
                className="startGameBnt"
                onClick={() => {
                  setShowGame(true);
                }}
              >
                Start Game
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Game;
