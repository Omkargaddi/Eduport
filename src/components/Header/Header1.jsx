import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header1.css";
import Logo from "../../assets/Header/Designer 1.png";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkmode") === "active"
  );

  // Effect to apply dark mode on load
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const isActive = !darkMode;
    setDarkMode(isActive);
    localStorage.setItem("darkmode", isActive ? "active" : "null");
  };

  return (
    <>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="p-4" id="drop">
            <h5 className="text-black h4">How can you interact with us?</h5>
            <span>Do you wanna know about us?</span>

            <ul>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/workwithus">
                  Work with us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <nav className="navbar" id="main-nav">
          <button
            className="navbar-toggler toggler1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="logo">
            <NavLink className="navbar-brand logo" to="/">
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
        </nav>
      </div>

      <div className="sticky-top sub-header ">
        <nav className="navbar navbar-expand-lg sticky-top" id="navbar">
          <button
            className="navbar-toggler toggler1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/course">
                  Course
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tutorial">
                  Tutorial
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/notes"
                  // style={{ color: "var(--text-color)", borderBottom: "1px solid var(--text-color)" }}
                >
                  Notes
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Content
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  id="content-drop"
                >
                  <NavLink className="dropdown-item" to="/content/html">
                    Html
                  </NavLink>
                  <NavLink className="dropdown-item" to="/content/css">
                    CSS
                  </NavLink>
                  <NavLink className="dropdown-item" to="/content/javascript">
                    Javascript
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item" to="/content/cpp">
                    C++
                  </NavLink>
                  <NavLink className="dropdown-item" to="/content/c">
                    C
                  </NavLink>
                  <NavLink className="dropdown-item" to="/content/python">
                    Python
                  </NavLink>
                  <NavLink className="dropdown-item" to="/content/java">
                    Java
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item" to="/content/php">
                    PHP
                  </NavLink>
                  <NavLink className="dropdown-item" to="/content/react">
                    React Js
                  </NavLink>
                </div>
              </li>

              <button id="theme-switch" onClick={toggleDarkMode}>
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
                  </svg>
                )}
              </button>
            </ul>
          </div>
        </nav>
        <div className="subheader-right">
          <NavLink className="btn btn-primary" to="/signup" role="button">
            Signup
          </NavLink>
          <NavLink className="btn btn-primary" to="/login" role="button">
            Login
          </NavLink>

          <NavLink
            className="nav-link profile"
            style={{ display: "none" }}
            to="/dashboard"
          >
            <i className="fas fa-user"></i>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
