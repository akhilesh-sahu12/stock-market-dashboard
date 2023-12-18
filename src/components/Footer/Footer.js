// components/Footer/Footer.js
import React from "react";
import "./Footer.css"; // Import your footer styles here

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-content">
        <p>&copy; 2023 Stock Market Dashboard</p>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
