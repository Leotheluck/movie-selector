import React from "react";

const Signup = () => {
  return (
    <section className="page-profile">
      <div className="main-content">
        <div className="wrapper">
          <div className="profile-h1">
            <h1>S'inscrire</h1>
          </div>
          <form className="form-profile">
            <div className="profile-user">
              <label htmlFor="email">Identifiant</label>
              <input type="email" id="email" required />
            </div>
            <div className="profile-email">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="profile-mdp">
              <label htmlFor="email">Mot de passe</label>
              <input type="password" className="pass" required />
            </div>
            <div className="profile-confirm">
              <label htmlFor="email">Confirmer mot de passe</label>
              <input type="password" className="pass" required />
            </div>
            <div className="profile-btn">
              <button type="submit">Crée</button>
            </div>
            <div className="profile-other">
              <a href="/connection">Connection au compte</a>
              <a href="/">Retour au site</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
