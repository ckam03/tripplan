import React from "react";
import NavBar from "./components/NavBar";
import LandingPageNav from "./components/LandingPageNav";
import Map from "./components/Map";
import "./assets/tailwindoutput.css";
import Locations from "./components/Locations";
import { LocationData } from "./components/LocationData";
import RegistrationForm from "./components/RegistrationForm";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/home">
        <NavBar />
        <div className="flex">
          <Locations />
          <Map LocationData={LocationData} />
        </div>
        </Route>
          <div className="flex flex-col">
          <Route path="/">
            <Redirect to="/login" />
            <LandingPageNav />
            <Login />
          </Route>
          </div>
          <Route exact path="/registration">
            <RegistrationForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
