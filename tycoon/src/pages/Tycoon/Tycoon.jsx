import React from 'react';
import { Link } from 'react-router-dom';
import './Tycoon.css';

function Tycoon() {
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
            <Link className="play" to="/mode">
              <button type="button" className="button-left"> </button>
            </Link>
          </div>
          <div className="bottom-right">
            <div className="top-two">
              <Link className="dd" to="/mode">
                <button type="button" className="top-twobnt"> </button>
              </Link>
            </div>
            <div className="bottom-two">
              <div className="bottom-two-left">
                <Link className="ddd" to="/mode">
                  <button type="button" className="bottom-two-left-bnt"> </button>
                </Link>
              </div>
              <div className="bottom-two-right-bnt">
                <Link className="ddd" to="/mode">
                  <button type="button" className="bottom-two-right-bnt"> </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="board" />

    </div>
  );
}

export default Tycoon;
