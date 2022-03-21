import React from 'react';
import { Link } from 'react-router-dom';

function Mode() {
  function play() {
  }

  return (
    <>
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

    </>
  );
}

export default Mode;
