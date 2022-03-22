import React from 'react';
import { Link } from 'react-router-dom';
import './Tycoon.css';

function Tycoon() {
  function play() {

  }
  return (
    <>
      <div className="title">Tycoon</div>
      <div className="menu-top">
        <div className="settings">
          <Link className="settings" to="/mode">
            <button type="button" onClick={play()}>
              Settings
            </button>
          </Link>
        </div>
        <div className="menu-bottom">
          <div className="menu-left">

            <Link className="play" to="/mode">
              <button type="button" onClick={play()}>
                Play
              </button>
            </Link>
          </div>
          <div className="menu-right">
            <div className="menu-right-top">
              <button type="button" onClick={play()}>
                Learn More
              </button>
            </div>
            <div className="menu-right-bottom">

              <button type="button" onClick={play()}>
                Shop
              </button>
              <button type="button" onClick={play()}>
                Chat
              </button>
            </div>

          </div>

        </div>

      </div>

      <div className="board" />

    </>
  );
}

export default Tycoon;
