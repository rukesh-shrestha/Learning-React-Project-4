import React from "react";
import DropDownItem from "./DropDownItem";

export default function NavDropDown(props) {
  return (
    <>
      <li className="nav-item dropdown rounded-circle-navbar">
        <a
          className="nav-link dropdown-toggle m-3"
          href="#"
          id={props.id}
          role={props.role}
          data-bs-toggle={props.data_bs_toggle}
          aria-expanded={props.expanded}>
          {props.value}
        </a>
        <ul className="dropdown-menu" aria-labelledby={props.id}>
          <DropDownItem dropdownitem={props.dropdownitem1} />
          <DropDownItem dropdownitem={props.dropdownitem2} />
          <DropDownItem dropdownitem={props.dropdownitem3} />
        </ul>
      </li>
    </>
  );
}
