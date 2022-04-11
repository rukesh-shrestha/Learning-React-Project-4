import React from "react";

export default function Nav(props) {
  return (
    <>
      <li className="nav-item p-3">
        <a className={`nav-link ${props.css}`} aria-current="page" href="#">
          {props.extra}
          {props.space}
          {props.value}
        </a>
      </li>
    </>
  );
}
