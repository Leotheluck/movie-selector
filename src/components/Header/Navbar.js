import React, { useState } from "react";
import "./Navbar.css";
import Clair from "./img/Clair.svg";
import Sombre from "./img/Sombre1.svg";
import Logo from "./img/Logo.jpg";

const Navbar = () => {
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          <img
            src={mode ? Clair : Sombre}
            alt="Mode clair"
            onClick={handleMode}
            className="nav-mode"
          />
          <p className="nav-language">Fr ▼</p>
        </div>
        <div className="nav-brand">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="nav-login">
          <a href="#">Se connecter</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
