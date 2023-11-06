import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        홈
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/board" className="nav-link">
              게시판
            </Link>
          </li>
          <li>
            <Link to="/join" className="nav-link">
              회원가입
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              로그인
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
