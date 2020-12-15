import React from "react";
import { FaBars } from "react-icons/fa";
import bestHeroImg from "../../assets/logo.png";
import "./style-home.css";



export default function Home() {
  return (
    <div className="page-home">
      <header className="header-menu">
        <div className="section-left-menu">
          <FaBars size={30} color="#ffffff" />
        </div>
        <div className="section-right-menu">
          <img src={bestHeroImg} alt="" className="logo-menu" />
        </div>
      </header>
    </div>
  );
}
