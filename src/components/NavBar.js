import React from "react";
import "../assets/tailwindoutput.css";
import Dropdown from "./Dropdown";

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-2 shadow-md font-poppins">
        <h1 className="text-xl font-semibold">Trip Planit</h1>

        <Dropdown />
      </nav>
    </>
  );
};

export default NavBar;
