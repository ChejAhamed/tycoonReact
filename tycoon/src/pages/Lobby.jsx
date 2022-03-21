import React from 'react';
import { Link } from 'react-router-dom';

function Lobby() {
  function play() {
  }
  return (
    <>
      <div>Lobby</div>
      <div className="manu">

        <Link className="singl P layer" to="/rules">
          <button type="button" onClick={play()}>
            Single Play
          </button>
        </Link>
        <button type="button" onClick={play()}>
          MultiPlayer
        </button>
        <button type="button" onClick={play()}>
          Pass & Play
        </button>
        <button type="button" onClick={play()}>
          Setting
        </button>
        <button type="button" onClick={play()}>
          Online With Friends
        </button>
      </div>

    </>
  );
}

export default Lobby;
