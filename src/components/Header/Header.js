import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <Link to="/" className="logo">
        Stocks Market
      </Link>
      <nav className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/stocks">Stocks</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
