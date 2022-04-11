import React from "react";

import Burger from "./Burger";
import Logo from "./Logo";
import NavLink from "./Navlink";

import "./css/Header.css";

export default function Header() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark h5">
          <div className="container-fluid">
            <Logo />
            <Burger />
            <NavLink />
          </div>
        </nav>
      </header>
    </div>
  );
}
