import React from "react";
import Header from "../header/Header";
import SearchBar from "./SearchBar";
import UpperSearchText from "./UpperSearchText";
import LowerSearchText from "./LowerSearchText";
import "./css/Body.css";
export default function MainContain() {
  return (
    <>
      <div className="body">
        <Header />
        <UpperSearchText />
        <SearchBar
          searchvalue="Get your offer"
          placeholder="Enter your home address"
        />
        <LowerSearchText />
      </div>
    </>
  );
}
