import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import FooterLogo from "../../assets/index/designer8.png";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start" id="footer">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2020 Copyright :{" "}
        <img src={FooterLogo} alt="EduPort Logo" id="footerlogo" />
        <NavLink className="text-body" to="/">
          EduPort.com
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
