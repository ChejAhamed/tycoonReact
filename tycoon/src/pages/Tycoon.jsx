import React from 'react';
import { Link } from 'react-router-dom';
import './Tycoon.css';

function Tycoon() {
  function play() {

  }
  return (
    <div className="tycoon">
      <div className="title">Tycoon</div>
      <div className="container">
        <div className="container-top">
          <div className="setting-button">
            <Link className="settings" to="/setting">
              <button className="button" type="button"> </button>
            </Link>
          </div>
        </div>
        <div className="container-bottom">
          <div className="bottom-left">
            <Link className="settings" to="/mode">
              <button type="button" className="button-left"> </button>
            </Link>
          </div>
        </div>
      </div>

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

    </div>
  );
}

export default Tycoon;
