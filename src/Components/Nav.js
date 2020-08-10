import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
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
