import React from "react";
import "./style-register.css";
import bestHeroImg from "../../assets/logo.png";

export default function Register() {
  return (
    <div className="page-register">
      <div className="card-register">
        <div className="section-logo-register">
          <img src={bestHeroImg} alt="" className="logo-register" />
        </div>
        <div className="section-form-register">
          <div className="form-group">
            <label htmlFor="">Nome *</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="">Data de  Nascimento *</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label htmlFor="">WhatsApp *</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="">Herói favorito da Marvel *</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="">E-mail *</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password *</label>
            <input type="password" />
          </div>
          <div className="form-group">
            <button className="btn">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
