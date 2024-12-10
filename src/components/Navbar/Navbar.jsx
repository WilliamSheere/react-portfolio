import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  return (
    <header>
      <nav className='navbar'>
    { /*    <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="contact">
              <li>Contact</li>
          </a>
          <a href="portfolio">
            <li>Portfolio</li>
          </a>
        </ul>
        */ }
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/portfolio'>Portfolio</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar