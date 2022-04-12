import React from "react";
import NavDropDown from "../header/NavDropDown";

export default function SearchBar(props) {
  return (
    <>
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="search">
              <input
                type="text"
                className="form-control"
                placeholder={props.placeholder}
              />
              <div>
                <button className="btn btn-primary ">
                  {props.searchvalue}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
