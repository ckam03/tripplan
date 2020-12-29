import React, { useState } from "react";
import "../assets/tailwindoutput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const DropdownToggle = (props) => {
  const [open, setOpen] = useState(false);
  //const toggle = () => setOpen((prevState) => !prevState);

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setOpen(!open)}>
        {props.icon}
      </div>

      {open && props.children}
    </div>
  );
};

const DropDownMenu = () => {
  return (
    <div className="bg-white absolute right-0 mt-3 z-10 border rounded-lg shadow-lg h-40 w-48 text-center transform transition duration-900 ease-in-out">
      <ul className="py-2">
      <li className="px-4 py-2 hover:bg-indigo-500 hover:text-indigo-50 cursor-pointer">
          Profile
        </li>
        <li className="px-4 py-2 hover:bg-indigo-500 hover:text-indigo-50 cursor-pointer">
          Settings
        </li>
        <li className="px-4 py-2  hover:bg-indigo-500 hover:text-indigo-50 cursor-pointer">
          Sign Out
        </li>
      </ul>
    </div>
  );
};

const Dropdown = (props) => {
  return (
    <div className="flex justify-end text-right">
      <DropdownToggle
        icon={
          <FontAwesomeIcon
            className="text-indigo-500"
            icon={faUserCircle}
            size="2x"
          />
        }
      >
        <DropDownMenu />
      </DropdownToggle>
    </div>
  );
};

export default Dropdown;
