import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        <NavLink className="nav-link" to="/">
          <li>Каталог</li>
        </NavLink>
        <NavLink className="nav-link" to="/EditProcessorList">
          <li>Редактирования каталога</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
