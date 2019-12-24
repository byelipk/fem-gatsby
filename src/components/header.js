import React from 'react';
import { Link } from 'gatsby';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="navlink navlink--bold">Workshop It</Link>
      <nav>
        <Link to="/" className="navlink" activeClassName="current-page">Home</Link>
        <Link to="/about" className="navlink" activeClassName="current-page">About</Link>
        <Link to="/contact" className="navlink" activeClassName="current-page">Contact Me</Link>
      </nav>
    </header>
  );
};

export default Header;
