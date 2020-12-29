import React from 'react';
import '../assets/tailwindoutput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faMountain, faUtensils } from '@fortawesome/free-solid-svg-icons'
import SearchBox from './SearchBox';
import Dropdown from './Dropdown';

const NavBar = () => {

    return (
        <>
            <nav className="flex justify-between items-center px-8 py-2 shadow-md">
                <div className="flex items-center">
                    <SearchBox />
                </div>

                <div className="">
                    <FontAwesomeIcon
                        className="text-blueGray-500 mr-5"
                        icon={faCamera}
                        size="lg"
                    />

                    <FontAwesomeIcon
                        className="text-warmGray-700"
                        icon={faUtensils}
                        size="lg"
                    />

                    <FontAwesomeIcon
                        className="text-yellow-800 ml-5"
                        icon={faMountain}
                        size="lg"
                    />
                </div>
                <Dropdown />
            </nav>
        </>
    );
}

export default NavBar;

