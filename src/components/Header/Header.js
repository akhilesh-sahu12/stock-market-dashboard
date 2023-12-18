/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Header.css";
import { CSSTransition } from "react-transition-group";

function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <Link to="/" className="logo">
      <img src={require("../../images/icons8-stock.png")} className="Logo" alt="logo" /></Link>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
         <nav className="Nav">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/stocks">Stocks</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
          <button>Logout</button>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="menu">
      ≡
      </button>
       </header>
  );
}

export default Header;
