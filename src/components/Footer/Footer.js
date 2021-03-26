import React from "react";
import "./Footer.css";
import Logo from "../Header/img/Logo.png";
import Twitter from "./img/Twitter.svg";
import Facebook from "./img/Facebook.svg";
import Instagram from "./img/Instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <p>Copyright © 2021-2022 Tout droits réservés</p>
        </div>
        <div className="footer-social">
          <a href="#" className="social-tw">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="#" className="social-fb">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="#" className="social-ig">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
        <div className="footer-menu">
          <ul className="footer-list">
            <li className="footer-item">A propos</li>
            <li className="footer-item">FAQ</li>
            <li className="footer-item">Contact</li>
            <li className="footer-item">Mentions légales</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
