import React from 'react';
import { Link } from 'react-router-dom';
import './Rules.css';

function Rules() {
  function play() {
  }
  return (
    <div className="rules">
      <div>Rules</div>
      <div className="manu">

        <Link className="classic" to="/lobby">
          <button type="button" onClick={play()}>
            Classic
          </button>
        </Link>
        <Link className="Quick" to="/lobby">
          <button type="button" onClick={play()}>
            Quick
          </button>
        </Link>
        <Link className="Custom" to="/lobby">
          <button type="button" onClick={play()}>
            Custom
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Rules;
