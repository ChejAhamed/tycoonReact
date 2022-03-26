import React from 'react';
import './Game.css';

function Game() {
  return (
    <div className="game">
      <div className="title">

        Game
      </div>
      WELLCOME TO THE GAME
      <div className="menu">
        <div className="humanPlayers">
          <button type="button" className="topHat  btngame">Top Hat</button>
          <button type="button" className="ship  btngame">Ship</button>
          <button type="button" className="dog  btngame">Dog</button>
          <button type="button" className="shoe  btngame">Shoe</button>
          <button type="button" className="car  btngame">Car</button>
          <button type="button" className="bird  btngame">bird</button>

        </div>
        <div className="aiPlayers">
          <button type="button" className="topHat  btngame">Top Hat</button>
          <button type="button" className="ship  btngame">Ship</button>
          <button type="button" className="dog  btngame">Dog</button>
          <button type="button" className="shoe  btngame">Shoe</button>
          <button type="button" className="car  btngame">Car</button>
          <button type="button" className="bird  btngame">bird</button>

        </div>
      </div>
      <div className="board" />
    </div>
  );
}

export default Game;
