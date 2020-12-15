import React from "react";
import "./style-login.css";
import bestHeroImg from "../../assets/logo.png";

export default function Login() {
  return (
    <div className="page-login">
      <div className="card-login">
        <div className="section-logo-login">
          <img src={bestHeroImg} alt="" className="logo-login" />
        </div>
        <div className="section-form-login">
          <div className="form-group">
            <label htmlFor="">E-mail</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <button className="btn">Logar</button>
          </div>
        </div>
        <div className="sectio-footer-login">
          <a href="../register">Cadastre-se</a>
        </div>
      </div>
    </div>
  );
}
