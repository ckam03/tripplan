import React from 'react';
import '../assets/tailwindoutput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = ({searchField, searchChange}) => {
    return(
        <div className="flex items-center h-9 w-56 border rounded-lg border-gray-300">

            <FontAwesomeIcon
            className="mx-2 text-indigo-500"
            icon={faSearch} />

            <input
            className="outline-none"
            type='search'
            placeholder='Search'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;