import React from 'react';
import { Link } from 'react-router-dom';
import './Lobby.css';

function Lobby() {
  function play() {
  }
  return (
    <>
      <div>Lobby</div>
      <div className="lobby">

        <Link className="game" to="/game">
          <button type="button" onClick={play()}>
            Start Game
          </button>
        </Link>

      </div>

    </>
  );
}

export default Lobby;
