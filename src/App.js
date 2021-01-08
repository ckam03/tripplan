import React  from 'react';
import NavBar from './components/NavBar';
import Map from './components/Map';
import './assets/tailwindoutput.css';
import Locations from './components/Locations';
import  {  LocationData } from './components/LocationData';
//import Trips from './components/Trips';


const App = () => {
  return (
    <div className="">
      <NavBar />
      <div className="flex">
      <Locations />
      <Map LocationData={LocationData} />
      </div>
    </div>
  );
}

export default App;
