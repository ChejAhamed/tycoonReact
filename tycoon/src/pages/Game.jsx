import React, { useState } from 'react';
import './Game.css';
import BoardPlayer from '../const/Board';

function Game() {
  const [disableButtonTopHat, setDisableButtonTopHat] = useState(false);
  const [disableButtonShip, setDisableButtonShip] = useState(false);
  const [disableButtonShoe, setDisableButtonShoe] = useState(false);
  const [disableButtonDog, setDisableButtonDog] = useState(false);
  const [disableButtonCar, setDisableButtonCar] = useState(false);
  const [disableButtonbird, setDisableButtonBird] = useState(false);
  const { players } = BoardPlayer;
  const board = BoardPlayer.theBoard;
  console.log(players);
  const plu = [];
  plu.push(players.human[0]);
  plu.push(players.ai[1]);
  plu.push(players.ai[2]);
  console.log(board);
  console.log(plu);

  const playerPlaying = [];
  function throwDice() {
    // throdice logic
  }
  function readArray() {
    for (let i = 0; i <= playerPlaying.length - 1; i += 1) {
      console.log(`iter over array ${playerPlaying}`);
    }
  }
  console.log(players);
  /* for (let i = 0; i <= players.length - 1; i += 1) {
    console.log(players);
  }
   */
  function startGame() {
    // move from menu screeen to game and show dice button
  }
  function addPlayer(player) {
    let playing = [];
    if (player.startsWith('h')) {
      if (player === 'hTopHat') {
        playerPlaying.push(players.human[0]);
        playerPlaying.push(players.human[2]);
        playing = [...playerPlaying];

        console.log(playing);
        setDisableButtonTopHat(true);
      } else if (player === 'hShip') {
        playerPlaying.push(players.human[1]);
        playing = [...playerPlaying];
        console.log(playing);
        setDisableButtonShip(true);
      } else if (player === 'hDog') {
        playing = [...playerPlaying, players.human[2]];
        console.log(playing);
        console.log(playing);
        setDisableButtonDog(true);
      } else if (player === 'hCar') {
        playerPlaying.push(players.human[3]);
        setDisableButtonCar(true);
        console.log(playerPlaying);
      } else if (player === 'hBird') {
        playerPlaying.push(players.human[4]);
        setDisableButtonBird(true);
        console.log(playerPlaying);
      } else if (player === 'hShoe') {
        playerPlaying.push(players.human[5]);
        setDisableButtonShoe(true);
        console.log(playerPlaying);
      } else {
        return alert('wrong input');
      }
    } else if (player.startsWith('ai')) {
      if (player === 'aiTopHat') {
        playerPlaying.push(players.ai[0]);
        setDisableButtonTopHat(true);
      } else if (player === 'aiShip') {
        playerPlaying.push(players.ai[1]);
        setDisableButtonShip(true);
      } else if (player === 'aiDog') {
        playerPlaying.push(players.ai[2]);
        setDisableButtonDog(true);
      } else if (player === 'aiCar') {
        playerPlaying.push(players.ai[3]);
        setDisableButtonCar(true);
      } else if (player === 'aiBird') {
        playerPlaying.push(players.ai[4]);
        setDisableButtonBird(true);
      } else if (player === 'aiShoe') {
        playerPlaying.push(players.ai[5]);
        // setDisableButtonShoe(true);
      }
    }
    console.log(playerPlaying.length);
    readArray();
    return playerPlaying;
  }
  function movePlayer() {
    const div = document.querySelector('#corner');
    const newChild = document.createElement('div');
    document.body.append(div, newChild);
  }
  movePlayer();
  console.log(playerPlaying);
  return (
    // usar [...aarray, nuevoItem] en bottom para pushear
    <div className="game">
      <div className="title">

        Game
      </div>
      WELLCOME TO THE GAME
      <div className="menu">
        <div className="humanPlayers">
          <button type="button" disabled={disableButtonTopHat} onClick={() => addPlayer('hTopHat')} className="topHat  btngame">Top Hat</button>
          <button type="button" disabled={disableButtonShip} onClick={() => addPlayer('hShip')} className="ship  btngame">Ship</button>
          <button type="button" disabled={disableButtonDog} onClick={() => addPlayer('hDog')} className="dog  btngame">Dog</button>
          <button type="button" disabled={disableButtonShoe} onClick={() => addPlayer('hShoe')} className="shoe  btngame">Shoe</button>
          <button type="button" disabled={disableButtonCar} onClick={() => addPlayer('hCar')} className="car  btngame">Car</button>
          <button type="button" disabled={disableButtonbird} onClick={() => addPlayer('hBird')} className="bird  btngame">Bird</button>

        </div>
        <div className="aiPlayers">
          <button type="button" disabled={disableButtonTopHat} onClick={() => addPlayer('aiTopHat')} className="topHat  btngame">Top Hat</button>
          <button type="button" disabled={disableButtonShip} onClick={() => addPlayer('aiShip')} className="ship  btngame">Ship</button>
          <button type="button" disabled={disableButtonDog} onClick={() => addPlayer('aiDog')} className="dog  btngame">Dog</button>
          <button type="button" disabled={disableButtonShoe} onClick={() => addPlayer('aiShoep')} className="shoe  btngame">Shoe</button>
          <button type="button" disabled={disableButtonCar} onClick={() => addPlayer('aiCar')} className="car  btngame">Car</button>
          <button type="button" disabled={disableButtonbird} onClick={() => addPlayer('aiBird')} className="bird  btngame">Bird</button>

        </div>
      </div>
      <div className="gridBard" />
      <div className="starGame">
        <button type="button" className="startGameBnt" onClick={() => startGame()}>Start Game</button>
      </div>
      <div className="dice">
        <button type="button" className="diceBnt" onClick={() => throwDice()}>Throw Dice</button>
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
    </div>
  );
}

export default Game;
