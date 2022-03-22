import React from 'react';
import { Link } from 'react-router-dom';
import './Mode.css';

function Mode() {
  function play() {
  }

  return (
    <div className="mode">
      <div>Mode</div>
      <div className="manu">

        <Link className="singlePlayer" to="/rules">
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

    </div>
  );
}

export default Mode;
