import React from 'react';
import { Link } from 'react-router-dom';
import './Lobby.css';

function Lobby() {
  function play() {
  }
  return (
    <div className="lobby">
      <div className="title">Lobby</div>
      <div className="l">

        <Link className="game" to="/game">
          <button type="button" onClick={play()}>
            Start Game
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Lobby;
