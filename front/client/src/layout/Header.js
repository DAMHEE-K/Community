import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  // const { isLoggedIn, setIsLoggedIn } = useAuth();

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
            <NavLink to="users/join" className={({ isActive }) => ( isActive ? "nav-link-active": "nav-link")}>
              JOIN
            </NavLink>
          </li>
          <li>
            <NavLink to="users/login" className={({ isActive }) => ( isActive ? "nav-link-active": "nav-link")}>
              LOGIN
            </NavLink>
          </li>
          <li>
            <NavLink to="users/info" className={({ isActive }) => ( isActive ? "nav-link-active": "nav-link")}>
              UserInfo
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
