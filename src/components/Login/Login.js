import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <section className="page-profile">
      <div className="main-content">
        <div className="wrapper">
          <div className="profile-h1">
            <h1>Se connecter</h1>
          </div>
          <form className="form-profile">
            <div className="profile-email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="profile-mdp">
              <label htmlFor="email">Mot de passe</label>
              <input type="password" className="pass" required />
            </div>
            <div className="profile-btn">
              <button type="submit">Se connecter</button>
            </div>
            <div className="profile-other">
              <a href="/inscription">Créer un compte</a>
              <a href="/">Retour au site</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
