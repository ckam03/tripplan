import React  from 'react';
import NavBar from './components/NavBar';
import Map from './components/Map';
import './assets/tailwindoutput.css';


const App = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Map />
    </div>
  );
}

export default App;
