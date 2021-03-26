import React, { useState } from "react";
import Clair from "./img/Clair.svg";
import Sombre from "./img/Sombre.svg";
import Logo from "./img/Logo.png";
import ArrowDown from "./img/ArrowDown.png";
import ArrowUp from "./img/ArrowUp.png";
import "./Navbar.css";

const Navbar = () => {
  const [mode, setMode] = useState(false);
  const [lang, setLang] = useState(false);

  const handleMode = () => {
    setMode(!mode);
  };
  const handleLang = () => {
    setLang(!lang);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-img">
            <img
              src={mode ? Clair : Sombre}
              alt="Mode clair"
              onClick={handleMode}
              className="nav-mode"
            />
          </div>
          <div className="nav-language" onClick={handleLang}>
            <p>FR</p>
            <img src={lang ? ArrowDown : ArrowUp} alt="arrow" />
          </div>
        </div>
        <div className="nav-brand">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="nav-login">
          <a href="/connection">Connection</a>
          <a href="/inscription">Inscription</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
