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
  const playerPlayingGame = [];
  console.log(board);
  console.log(players);
  const playerPlaying = [];

  function throwDice() {
    const numberOne = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    const numberTwo = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    const newPosition = numberOne + numberTwo;
    console.log(newPosition);
    // git merplay(newPosition);

    console.log(`yuppi${Math.random() * 1}` < 0.5);
  }
  function startGame() {
    for (let i = 0; i <= playerPlayingGame.length - 1; i += 1) {
      console.log(playerPlayingGame.human[0]);
    }
    // move from menu screeen to game and show dice button
    console.log(playerPlayingGame);
  }
  /*
 function movePlayer() {
    const div = document.querySelector('#corner');
    const newChild = document.createElement('div');
    document.body.append(div, newChild);
  }
  movePlayer();
*/
  return (
    // usar [...aarray, nuevoItem] en bottom para pushear
    <div className="game">
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
      <div className="starGame">
        <button type="button" className="startGameBnt" onClick={() => startGame()}>Start Game</button>
      </div>
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
