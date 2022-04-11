import React from "react";
import usersign from "./usersignin.png";
export default function SingIn(props) {
  return (
    <>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link " href="#">
            {props.value}
            <img src={usersign} className="img-fluid userlogin" />
          </a>
        </li>
      </ul>
    </>
  );
}
