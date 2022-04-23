import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./Styles/App.scss";

import SwapiQuery from "./Component/SwapiQuery";
import Weather from "./Component/Weather";
import Timer from "./Component/Timer";
import Dice from "./Component/Dice";
import Eval from "./Component/Eval";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Component/Navbar";
import Login from "./Pages/Login";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState();

  const loginRoute = () => {
    return (
      <Routes>
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>
    );
  };

  const authenticatedRoutes = () => {
    if (!showNavbar) {
      setShowNavbar(true);
    }

    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/swapi" element={<SwapiQuery />} />
        <Route path="/dice-roll" element={<Dice />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/arithmetic" element={<Eval />} />
        <Route path="/about" element={<About />} />
      </Routes>
    );
  };
  return (
    <div className="app-container">
      <Router>
        {showNavbar && isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} setNavbar={setShowNavbar}/>}
        {isAuthenticated ? authenticatedRoutes() : loginRoute()}
      </Router>
    </div>
  );
}

export default App;
