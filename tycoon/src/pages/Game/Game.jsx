/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-self-assign */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import './Game.css';
import BoardPlayer from '../../const/Board';

function Game() {
  const [disableButtonTopHat, setDisableButtonTopHat] = useState(false);
  const [disableButtonShip, setDisableButtonShip] = useState(false);
  const [disableButtonShoe, setDisableButtonShoe] = useState(false);
  const [disableButtonDog, setDisableButtonDog] = useState(false);
  const [disableButtonCar, setDisableButtonCar] = useState(false);
  const [disableButtonbird, setDisableButtonBird] = useState(false);
  const { theBoard } = BoardPlayer;
  const { players } = BoardPlayer;
  useEffect(() => {
    players.money;
  }, []);
  console.log(players);
  let playerNumber = 0;
  let currentRoll = 0;
  const logoShip = 'https://cdn.imgbin.com/23/13/17/imgbin-monopoly-brik-board-game-hasbro-spaceship-DU2tuutaCF0HgpGXAgRbfKKSv.jpg';
  const playerPlayingGame = [{
    id: 1,
    name: 'Mark',
    piece: 'shoe',
    currentSpace: 1,
    logo: logoShip,
    isBankrupt: false,
    money: 1500,
    properties: [],
    propertyNameList: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,
    movePlayer(newLocation) {
      // add login to handle number over 40

      players.currentSpace += newLocation;
    },

    makeAChoice() {
      if (Math.random() * 1 < 0.5) {
        return true;
      }
      return false;
    },

    buyProperty(thisProperty) {
      if (this.money >= thisProperty.value) {
        // pay for the property
        this.money -= thisProperty.value;
        // set purchased value to true
        thisProperty.purchased = true;
        // set this player as owner
        thisProperty.ownedBy = playerNumber;
        console.log(playerNumber);
        // push this into a list of properties owned by this player
        this.properties.push(thisProperty);
        // console.log(this.name+" just bought "+ thisProperty.name +"for $"+ thisProperty.value);
        // console.log(`${this.name} now owns ${thisProperty.name}! Enjoy!`);
      } else {
        console.log(`You can't afford ${thisProperty.name}, ${this.name}`);
      }
    },

    propertyNames() {
      for (let i = 0; i < this.properties.length; i += 1) {
        this.propertyNameList.push(this.properties[i].name);
        console.log(i);
      }
      return this.propertyNameList;
    },
  },
  {
    name: 'Sabaa',
    piece: 'Dog',
    currentSpace: 1,
    isBankrupt: false,
    money: 1500,
    properties: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,

    makeAChoice() {
      if (Math.random() * 1 < 0.5) {
        return true;
      }
      return false;
    },

    buyProperty(thisProperty) {
      if (this.money >= thisProperty.value) {
        // pay for the property
        this.money -= thisProperty.value;
        // set purchased value to true
        thisProperty.purchased = true;
        // set this player as owner
        thisProperty.ownedBy = playerNumber;
        console.log(playerNumber);
        // push this into a list of properties owned by this player
        this.properties.push(thisProperty);
        // console.log(this.name+" just bought "+ thisProperty.name +"for $"+ thisProperty.value);
        // console.log(`${this.name} now owns ${thisProperty.name}! Enjoy!`);
      } else {
        console.log(`You can't afford ${thisProperty.name}, ${this.name}`);
      }
    },
  },
  {
    name: 'Fer',
    piece: 'Top Hat',
    currentSpace: 1,
    isBankrupt: false,
    money: 1500,
    properties: [],
    rrOwned: 0,
    inJail: false,
    doubles: false,
    jailRoll: 0,

    makeAChoice() {
      if (Math.random() * 1 < 0.5) {
        return true;
      }
      return false;
    },

    buyProperty(thisProperty) {
      if (this.money >= thisProperty.value) {
        // pay for the property
        this.money -= thisProperty.value;
        // set purchased value to true
        thisProperty.purchased = true;
        // set this player as owner
        thisProperty.ownedBy = playerNumber;
        console.log(playerNumber);
        // push this into a list of properties owned by this player
        this.properties.push(thisProperty);
        console.log(`${this.name} just bought ${thisProperty.name}for $${thisProperty.value}`);
        console.log(`${this.name} now owns ${thisProperty.name}! Enjoy!`);
      } else {
        console.log(`You can't afford ${thisProperty.name}, ${this.name}`);
      }
    },
  },
  ];
  console.log(theBoard);
  console.log(players);
  const playerPlaying = [];
  console.log(players.length);
  /*
  function throwDice() {
    const numberOne = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    const numberTwo = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    const newPosition = numberOne + numberTwo;
    console.log(newPosition);
    // git merplay(newPosition);

    console.log(`yuppi${Math.random() * 1}` < 0.5);
  }
  */
  /* TYLER DICE
  let rollDice = (n) => {
  return new Array(n).fill(0).reduce((accumulator) => {
    return accumulator + Math.floor(Math.random() * 6 + 1);
  }, 0);
  };
  */

  /** *roll dice. Made  2 dice in case of expansion to graphics to match 2 die* */
  const rollDice = () => {
  /** *counting the number of doubles player rolls in a row */
    let doubles = 0;

    /** *each die get a roll to establish doubles */
    const dieOne = Math.floor(Math.random() * 6 + 1);
    const dieTwo = Math.floor(Math.random() * 6 + 1);

    /** *if we roll a double */
    if (dieOne === dieTwo) {
      console.log(`${players[playerNumber].name} rolled double ${dieOne}'s!"`);
      players[playerNumber].doubles = true;
      /** *increase the doubles count by one */
      doubles += 1;

      /** *if we roll 3 doubles in a row, we go to jail */
      if (doubles >= 3) {
        console.log(
          `${players[playerNumber].name} rolled doubles 3 times and is going to jail!`,
        );
        players[playerNumber].currentSpace = 0;
        players[playerNumber].inJail = true;
        theBoard.spaceAction(players[playerNumber]);
      }
    } else {
    /** *If we don't roll doubles, set double to 0 */
      doubles = 0;
      players[playerNumber].doubles = false;
    }

    /** *add combined roll */
    currentRoll = dieOne + dieTwo;

    console.log(`${players[playerNumber].name} rolled a ${currentRoll}`);

    return currentRoll;
  };

  /** *takes result of diceRoll and moves the player* */
  function movePlayer(player) {
    if (player.inJail) {
      console.log(player);
    }

    /** *if the total is bigger than the board */
    if (player.currentSpace + currentRoll > theBoard.length - 1) {
    /** *  player.currentSpace = the current player's space to  the result of
     * subtracting the playerSpace+currentRoll - theBoard length
     * This should result in the correct space number;
     */

      player.currentSpace = player.currentSpace + currentRoll - (theBoard.length - 1);
      console.log(player.currentSpace);
    } else {
    /** * just add the roll to the space */
      player.currentSpace += currentRoll;
    }
  }

  function whichSpace(space) {
    space.spaceAction(players[playerNumber]);
  }
  function playerTurn(player) {
    console.log(player);
    // let player = players[playerNumber];
    if (!player.inJail) {
      rollDice();
      movePlayer(player);
      whichSpace(theBoard[players[playerNumber].currentSpace]);
    } else {
      rollDice();
      player.jailRoll += 1;

      if (player.jailRoll === 4) {
        player.currentSpace = 11;
        player.money -= 50;
        console.log(
          `${player.name} has served their term in jail and paid their fine.`,
        );
        player.doubles = false;
        return;
      }

      if (player.doubles) {
        player.currentSpace = 11;
        console.log(`${player.name} rolled doubles and is out of jail.`);
        player.doubles = false;
      }
    }
  }
  function switchPlayer() {
    if (!players[playerNumber].doubles) {
      playerNumber += 1;
      console.log(players);
      console.log(`space ${playerNumber}`);
      if (playerNumber >= players.length) {
        playerNumber = 0;
        theBoard[players[playerNumber].currentSpace] = theBoard[players[playerNumber].currentSpace];
      } else {
      // players[playerNumber] = players[playerNumber];
        console.log(playerNumber);
        console.log(theBoard[players[playerNumber].currentSpace]);
        theBoard[players[playerNumber].currentSpace] = theBoard[players[playerNumber].currentSpace];
      }
    } else {
      console.log(`${players[playerNumber].name} gets another turn!`);
      playerTurn(players[playerNumber]);
    }
  }

  console.log(`It is ${players[playerNumber].name}'s turn!`);

  /** *takes the current space value of the player and uses it to find the name
   * of the current space on the board
 * */
  function throwDice() {
    // move from menu screeen to game and show dice button
    console.log(playerPlayingGame);
    if (players[playerNumber].isBankrupt) {
      console.log(`No more turns for you, ${players[playerNumber].name}`);
      alert(`No more turns for you, ${players[playerNumber].name}`);
    } else {
      console.log(
        `${players[playerNumber].name} is on ${
          theBoard[players[playerNumber].currentSpace].name
        } and has $${players[playerNumber].money}.`,
      );
      // inJail(player)
      playerTurn(players[playerNumber]);
      // rollDice();
      // movePlayer(players[playerNumber]);
      // whichSpace(theBoard[players[playerNumber].currentSpace]);
      console.log(
        `${players[playerNumber].name} is on ${
          theBoard[players[playerNumber].currentSpace].name
        } and has $${players[playerNumber].money}.`,
      );
    }
    switchPlayer();
  }
  /** *mimic player activity*
  for (let i = 0; i < 60; i += 1) {
    console.log(' ');
    console.log(`ITERATION ${i}`);
    if (players[playerNumber].isBankrupt) {
      console.log(`No more turns for you, ${players[playerNumber].name}`);
      alert(`No more turns for you, ${players[playerNumber].name}`);
    } else {
      console.log(
        `${players[playerNumber].name} is on ${
          theBoard[players[playerNumber].currentSpace].name
        } and has $${players[playerNumber].money}.`,
      );
      // inJail(player)
      playerTurn(players[playerNumber]);
      // rollDice();
      // movePlayer(players[playerNumber]);
      // whichSpace(theBoard[players[playerNumber].currentSpace]);
      console.log(
        `${players[playerNumber].name} is on ${
          theBoard[players[playerNumber].currentSpace].name
        } and has $${players[playerNumber].money}.`,
      );
    }
    switchPlayer();
  } */

  const chanceCards = [
    {
      title: 'Pay poor tax of $15',
      pulled: false,
      chanceAction(player) {
        player.money -= 15;
      },
    },
    {
      title:
      'Make general repairs on all your property. For each house pay $25. For each hotel $100',
      pulled: false,

      chanceAction(player) {
        player.money -= player.houseCount * 25;
        player.money -= player.hotelCount * 100;
      },
    },
    {
      title: 'Bank pays you dividend of $50',
      pulled: false,
      chanceAction(player) {
        player.money -= 50;
      },
    },
    {
      title: 'Take a ride on the Reading. If you Pass GO, collect $200.',
      pulled: false,

      chanceAction(player) {
        if (player.currentSpace > 6) {
          theBoard[1].spaceAction(player);
        }
        player.currentSpace = 6;
      },
    },
    {
      title: 'Take a walk on the Boardwalk. Advance token to Boardwalk.',
      pulled: false,
    // player.currentSpace = 40
    },
    {
      title: 'This card may be kept until needed or sold. Get out of jail free.',
      pulled: false,

      chanceAction(player) {
        player.currentSpace = 11;
      },
    },
    {
      title: 'Go back three spaces',
      pulled: false,

      chanceAction(player) {
        player.currentSpace -= 3;
      },
    },
    {
      title: 'Advance to GO. Collect $200',
      pulled: false,

      chanceAction(player) {
        player.currentSpace = 1;
        theBoard[1].spaceAction(player);
      },
    },
    {
      title: 'Advance to St. Charles Place. If you pass go, collect $200',
      pulled: false,

      chanceAction(player) {
        if (player.currentSpace > 12) {
          theBoard[1].spaceAction(player);
        }
      },
    },
    {
      title:
      'Advance token to the nearest railroad and pay owner twice the rental to which they are otherwise entitled. If the Railroad is unowned, you may buy it from the bank.',
      pulled: false,
      railroadSpaces: [6, 16, 26, 36],

      findSpace(space) {
        if (
          player.currentSpace
        < this.railroadSpaces[this.railroadSpaces.length - 1]
        ) {
          return space > player.currentSpace;
        }
        return railroadSpaces[0];
      },

      chanceAction(player) {
        player.currentspace = railroadSpaces.find(findSpace);
        theBoard[player.currentSpace].ownedby;
      },
    },
    {
      title: 'You have been Elected Chairman of the board. Pay each player $50.',
      pulled: false,

      chanceAction(player) {
        player.money -= 50 * players.length;
        for (let i = 0; i < players.length - 1; i += 1) {
          if (i !== playerNumber) {
            player[i].money += 50;
          }
        }
      },
    },
    {
      title: 'Go Directly to jail! Do not pass GO! Do not collect $200.',
      pulled: false,

      chanceAction(player) {
        player.currentSpace = 0;
        player.inJail = true;
        player.doubles = 0;
      },
    },
    {
      title: 'Advance to Illinois Ave.',
      pulled: false,

      chanceAction(player) {
        player.currentSpace = 20;
        player.whichSpace(player.currentSpace);
      },
    },
    {
      title:
      'Advance Token to nearest utility. If unowned, you may but it from bank. If owned, throw dice and pay owner a total ten times the amount thrown.',
      pulled: false,
      utilities: [13, 28],

      findSpace(space) {
        if (player.currentSpace < this.utilities[this.utilities.length - 1]) {
          return space > player.currentSpace;
        }
        return this.utilities[0];
      },

      chanceAction(player) {
        const rentOwed = rollDice() * 10;

        player.money -= rentOwed;
        player.currentspace = railroadSpaces.find(findSpace);
        theBoard[player.currentSpace].owner += rentOwed;
      },
    },
    {
      title: 'Your building loan matures. Collect $150',
      pulled: false,

      chanceAction(player) {
        player.money += 150;
      },
    },
  ];
  console.log(chanceCards);
  /*
 function movePlayer() {
    const div = document.querySelector('#corner');
    const newChild = document.createElement('div');
    document.body.append(div, newChild);
  }
  movePlayer();
*/
  const [showGame, setShowGame] = React.useState(false);

  return (
    // usar [...aarray, nuevoItem] en bottom para pushear
    <div className="game">
      {showGame ? (
        <div className="secondWindow">
          <div className="loader-wrapper">
            <div className="loader">
              <div className="loader loader-inner" />

            </div>
          </div>
          <div className="boardGameSec">
            <div className="dice">
              <button type="button" className="diceBnt" onClick={() => throwDice()}>Throw Dice</button>
              <div className="diceContainer">
                <div className="diceOne" />
                <div className="diceTwo" />
              </div>

            </div>
            <div id="board" className="board">
              <div className="top">
                <div id="20" className="parking corner" />
                <div id="21" className="horizontal" />
                <div id="22" className="horizontal" />
                <div id="23" className="horizontal" />
                <div id="24" className="horizontal" />
                <div id="25" className="horizontal" />
                <div id="26" className="horizontal" />
                <div id="27" className="horizontal player1" />
                <div id="28" className="horizontal" />
                <div id="29" className="horizontal" />
                <div id="0" className="jail corner" />
              </div>
              <div className="mid">
                <div className="mid-left">
                  <div id="19" className="vertical " />
                  <div id="18" className="vertical" />
                  <div id="17" className="vertical" />
                  <div id="16" className="vertical" />
                  <div id="15" className="vertical" />
                  <div id="14" className="vertical" />
                  <div id="13" className="vertical" />
                  <div id="12" className="vertical" />
                  <div id="11" className="vertical" />
                </div>
                <div className="mid-mid" />
                <div className="mid-right">
                  <div id="30" className="vertical" />
                  <div id="31" className="vertical" />
                  <div id="32" className="vertical" />
                  <div id="33" className="vertical" />
                  <div id="34" className="vertical" />
                  <div id="35" className="vertical" />
                  <div id="36" className="vertical" />
                  <div id="37" className="vertical" />
                  <div id="39" className="vertical" />
                </div>
              </div>
              <div className="bottom">
                <div id="0" className="jail corner" />
                <div id="10" className="horizontal" />
                <div id="9" className="horizontal" />
                <div id="8" className="horizontal" />
                <div id="7" className="horizontal" />
                <div id="6" className="horizontal" />
                <div id="5" className="horizontal" />
                <div id="4" className="horizontal" />
                <div id="3" className="horizontal" />
                <div id="2" className="horizontal" />
                <div id="1" className="collect corner" />
              </div>

            </div>
            <div className="dialogPlayer">
              <div className="dialogInfo">
                info
              </div>
              <div className="dialogAction">
                buttons
              </div>
            </div>
          </div>
          <div className="infoWindow">
            <div className="playerList">
              <div className="playerListname">
                <p>Players Playing</p>
                {players.map((player) => <div key={player.id} className="names">{player.name}</div>)}
              </div>
              <div className="moneyPlayerList">
                <p>Players Money</p>
                {players.map((player) => <div key={player.id} className="money">{player.money}</div>)}
              </div>
              <div className="playerListProperty">
                <p>Number of Propierties</p>
                {players.map((player) => <div key={player.id} className="properties">{player.properties.length}</div>)}
              </div>

            </div>
            <div className="playerDetails">
              <p>Players Details:</p>
              <div className="playerName">
                <p>Name:</p>
                {players[playerNumber].name}
              </div>
              <div className="playerName">
                <p>Players Money:</p>
                {players[playerNumber].money}
              </div>
              <div className="playerName">
                <p>Number Of Properties:</p>
                {players[playerNumber].properties.length}
              </div>
              <div className="playerlogo">
                <img className="logo" src={players[playerNumber].logo} width="60rem" height="60rem" alt="logo" />
              </div>

            </div>

          </div>
        </div>

      ) : (
        <div className="firstWindow">
          <div className="title">

            Game
          </div>
          WELLCOME TO THE GAME
          <div className="menu">
            <div className="humanPlayers">
              <button type="button" disabled={disableButtonTopHat} onClick={() => { playerPlayingGame.push(players.human[0]); setDisableButtonTopHat(false); }} className="topHat  btngame">Top Hat</button>
              <button type="button" disabled={disableButtonShip} onClick={() => { playerPlayingGame.push(players.human[1]); setDisableButtonShip(false); }} className="ship  btngame">Ship</button>
              <button type="button" disabled={disableButtonDog} onClick={() => { playerPlayingGame.push(players.human[2]); setDisableButtonDog(false); }} className="dog  btngame">Dog</button>
              <button type="button" disabled={disableButtonShoe} onClick={() => { playerPlaying.push(players.human[3]); setDisableButtonShoe(true); }} className="shoe  btngame">Shoe</button>
              <button type="button" disabled={disableButtonCar} onClick={() => { playerPlaying.push(players.human[4]); setDisableButtonCar(true); }} className="car  btngame">Car</button>
              <button type="button" disabled={disableButtonbird} onClick={() => { playerPlaying.push(players.human[5]); setDisableButtonBird(true); }} className="bird  btngame">Bird</button>

            </div>
            <div className="aiPlayers">
              <button type="button" disabled={disableButtonTopHat} onClick={() => { playerPlaying.push(players.ai[0]); setDisableButtonTopHat(true); }} className="topHat  btngame">Top Hat</button>
              <button type="button" disabled={disableButtonShip} onClick={() => { playerPlaying.push(players.ai[1]); setDisableButtonShip(true); }} className="ship  btngame">Ship</button>
              <button type="button" disabled={disableButtonDog} onClick={() => { playerPlaying.push(players.ai[2]); setDisableButtonDog(true); }} className="dog  btngame">Dog</button>
              <button type="button" disabled={disableButtonShoe} onClick={() => { playerPlaying.push(players.ai[3]); setDisableButtonShoe(true); }} className="shoe  btngame">Shoe</button>
              <button type="button" disabled={disableButtonCar} onClick={() => { playerPlaying.push(players.ai[4]); setDisableButtonCar(true); }} className="car  btngame">Car</button>
              <button type="button" disabled={disableButtonbird} onClick={() => { playerPlaying.push(players.ai[5]); setDisableButtonBird(true); }} className="bird  btngame">Bird</button>

            </div>
          </div>
          <div className="gridBard" />
          <div className="rules">
            <div className="classic">
              <button type="button" className="classicBnt" onClick={() => startGame()}>Classic</button>
            </div>
            <div className="quick">
              <button type="button" className="quickBnt" onClick={() => startGame()}>Quick</button>
            </div>
            <div className="custom">
              <button type="button" className="customBnt" onClick={() => startGame()}>Custom</button>
            </div>
          </div>
          <div className="starGame">
            <button type="button" className="startGameBnt" onClick={() => { setShowGame(true); }}>Start Game</button>
          </div>
        </div>

      )}
    </div>
  );
}

export default Game;
