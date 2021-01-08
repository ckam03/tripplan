import React from "react";
import "../assets/tailwindoutput.css";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="flex items-center h-9 w-60 border rounded-lg text-gray-800">
      <svg
        className="mx-2 text-indigo-500 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <input
        className="outline-none font-poppins"
        type="search"
        placeholder="Search"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
