import { useState } from "react";
import "./MenuBar.css";
import profile from "../../../assets/image/profile.jpeg";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MenuBar({ isDark, setIsDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}

      <div className={`hamburger ${isDark ? "dark" : "light"}`}>
        <img src={profile} alt="profile" />
        <div>
          <i
            className={isDark ? "fas fa-sun" : "fas fa-moon"}
            onClick={toggleTheme}
          ></i>
          <i className="fas fa-bars" onClick={toggleMenu}></i>
        </div>
      </div>

      {/* Background overlay */}
      <div
        className={`menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>

      {/* Side vertical menu */}
      <div
        className={`side-menu ${menuOpen ? "open" : ""} ${
          isDark ? "dark" : "light"
        }`}
      >
        <div className="close-btn" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </div>
        {/* <img src={profile} alt="profile" /> */}
        <ul className="side-menu-items">
          <li className="nav-menu-item" onClick={toggleMenu}>
            About
          </li>
          <li className="nav-menu-item" onClick={toggleMenu}>
            Home
          </li>
          <li className="nav-menu-item" onClick={toggleMenu}>
            Contact
          </li>
          <li
            className="nav-menu-item clickable"
            onClick={() =>
              window.open(
                "https://www.google.com",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Resume
          </li>
        </ul>
      </div>

      {/* Normal Nav Bar (large screens) */}
      <div className={`nav-bar ${isDark ? "dark" : "light"}`}>
        <img src={profile} alt="profile" />
        <ul className="nav-menu">
          <li className="nav-menu-item">About</li>
          <li className="nav-menu-item">Home</li>
          <li className="nav-menu-item">Contact</li>
        </ul>
        <ul className="nav-menu">
          <li
            className="nav-menu-item clickable"
            onClick={() =>
              window.open(
                "https://www.google.com",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Resume
          </li>
        </ul>
        {/* <ul className="nav-menu"> */}
        <ul>
          <li className="nav-menu-item theme-toggle" onClick={toggleTheme}>
            <i className={isDark ? "fas fa-sun" : "fas fa-moon"}></i>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MenuBar;
