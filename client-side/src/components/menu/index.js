import React from "react";
import "./style.css";
import { FaBars } from "react-icons/fa";
import bestHeroImg from "../../assets/logo.png";

export default function Home() {
  return (
    <div className="section-menu">
      <div className="section-left-menu">
        <FaBars size={30} color="#ffffff" />
      </div>
      <div className="section-right-menu">

      </div>
    </div>
  );
}
