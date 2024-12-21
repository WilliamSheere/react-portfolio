import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
	const location = useLocation();
	console.log(location);
	return (
		<header>
			<nav className="navbar">
				{/*    <ul>
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
        */}
				<div className="nav-links">
					<Link
						className={
							location.pathname === "/" ? "activeLink" : "inactiveLink"
						}
						to="/"
					>
						Home
					</Link>
					<Link
						className={
							location.pathname === "/contact" ? "activeLink" : "inactiveLink"
						}
						to="/contact"
					>
						Contact
					</Link>
					<Link
						className={
							location.pathname === "/portfolio" ? "activeLink" : "inactiveLink"
						}
						to="/portfolio"
					>
						Portfolio
					</Link>
					<Link
						className={
							location.pathname === "/resume" ? "activeLink" : "inactiveLink"
						}
						to="/resume"
					>
						Resume
					</Link>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
