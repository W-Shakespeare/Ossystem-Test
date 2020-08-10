import React, { useState } from "react";
import Nav from "./Nav";
import { ReactComponent as ReactLogo } from "./react.svg";
import AuthorizationStatus from "./AuthorizationStatus";
const Header = () => {
  const [hideMenu, setHideMenu] = useState(true);

  const menuListAppear = () => {
    setHideMenu(!hideMenu);
  };
  return (
    <header>
      <div onClick={menuListAppear} className={hideMenu ? "menu" : "change"}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <Nav />
      <AuthorizationStatus />
      <ReactLogo className="logo" />
    </header>
  );
};

export default Header;
