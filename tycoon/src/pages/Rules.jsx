import React from 'react';
import { Link } from 'react-router-dom';

function Rules() {
  function play() {
  }
  return (
    <>
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

    </>
  );
}

export default Rules;
