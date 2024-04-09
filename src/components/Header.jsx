import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <h1>Shubham</h1>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shubham">Shubham</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
