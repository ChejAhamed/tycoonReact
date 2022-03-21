import React from 'react';
import { Link } from 'react-router-dom';
import './Tycoon.css';

function Tycoon() {
  function play() {

  }
  return (
    <>
      <div>Tycoon</div>
      <div className="menu">
        <button type="button" onClick={play()}>
          Setting
        </button>
        <Link className="play" to="/mode">
          <button type="button" onClick={play()}>
            Play
          </button>
        </Link>
        <button type="button" onClick={play()}>
          Learn More
        </button>
        <button type="button" onClick={play()}>
          Shop
        </button>
        <button type="button" onClick={play()}>
          Setting
        </button>
        <button type="button" onClick={play()}>
          Chat
        </button>
      </div>

      <div className="board" />

    </>
  );
}

export default Tycoon;
