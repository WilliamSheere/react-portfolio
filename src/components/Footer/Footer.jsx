import React from 'react'
import './Footer.css'
import GitHub from "../../assets/github-mark-white.svg";

function Footer(props) {

 
  return (
		<div>
			<footer>
				<h2>
					<a href="https://github.com/WilliamSheere">
					<img src={GitHub} alt="GitHub Image" /></a>
				</h2>
			</footer>
		</div>
	);
}

export default Footer