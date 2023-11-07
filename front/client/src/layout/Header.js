import React from "react";
import {Link} from "react-router-dom";

const Header = () => {

  const activeStyle = {
    color : 'red',
  }

  return (
    <nav>
      <Link to="/" className="navbar-brand">
        KIM DAMHEE's page
      </Link>
      <div className="nav-list">
        <ul>
        <li>
            <NavLink to="/projects" className={({ isActive }) => ( isActive ? "nav-link-active": "nav-link")}>
              PROJECTS
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
            <NavLink to="/login" className={({ isActive }) => ( isActive ? "nav-link-active": "nav-link")}>
              LOGIN
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;