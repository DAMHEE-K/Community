import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav>
      <Link to="/" className="navbar-brand">
        Community
      </Link>
      <div className="nav-list">
        <ul>
          <li>
            <NavLink to="/profile" className={({ isActive }) => ( isActive ? "nav-link-active": "nav-link")}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/board" className={({ isActive }) => ( isActive ? "nav-link-active": "nav-link")}>
              BOARD
            </NavLink>
          </li>
          <li>
            <NavLink to="/join" className={({ isActive }) => ( isActive ? "nav-link-active": "nav-link")}>
              JOIN
            </NavLink>
          </li>
          <li>
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <NavLink to="/login" className={({ isActive }) => ( isActive ? "nav-link-active": "nav-link")}>
                LOGIN
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
