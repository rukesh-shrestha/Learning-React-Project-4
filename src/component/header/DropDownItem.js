import React from "react";

export default function DropDownItem(props) {
  return (
    <>
      <li>
        <a className="dropdown-item" href="#">
          {props.dropdownitem}
        </a>
      </li>
    </>
  );
}
