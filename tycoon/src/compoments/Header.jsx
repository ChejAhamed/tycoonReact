import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/tycoon">Tycoon</Link>
      <Link to="/aboutus">Aboutus</Link>
    </nav>
  );
}

export default Header;
