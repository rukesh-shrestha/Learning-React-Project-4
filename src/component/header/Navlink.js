import React from "react";
import Nav from "./Nav";
import NavDropDown from "./NavDropDown";
import SingIn from "./Signin";

export default function NavLink() {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Nav value="Products" css="active" extra="&#x2E2C;" space="&nbsp;" />
          <Nav value="Price" extra="|" space="&nbsp;" />
          <Nav value="How it works?" />
          <NavDropDown
            id="navbarDropdown"
            role="button"
            data_bs_toggle="dropdown"
            aria-expanded="false"
            value="More"
            dropdownitem1="Clothing"
            dropdownitem2="Furniture"
            dropdownitem3="Electronic Device"
          />
        </ul>
        <SingIn value="Sign in" />
      </div>
    </>
  );
}
