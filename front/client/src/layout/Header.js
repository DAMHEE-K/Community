import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <nav>
      <Link to="/" className="navbar-brand">
        HOME
      </Link>
      <div className="nav-list">
        <ul>
          <li>
            <Link to="/board" className="nav-link">
              BOARD
            </Link>
          </li>
          <li>
            <Link to="/join" className="nav-link">
              JOIN
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
