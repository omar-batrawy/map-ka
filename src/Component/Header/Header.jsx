import React from "react";
import "./Header.css";
import logo from "./../Images/icons8-globe-50.png";
function Header() {
  return (
    <div className="header-container">
      <div className="firstcontainerinheader">
        <img src={logo} alt="logo" />
        <h3 style={{ color: "white" }}>ArcGIS Developer</h3>
        <div className="iteminfirstcontainer">Documentaion</div>
        <div className="iteminfirstcontainer">Features</div>

        <div className="iteminfirstcontainer">Pricing</div>

        <div className="iteminfirstcontainer">Support</div>
      </div>
    </div>
  );
}

export default Header;
