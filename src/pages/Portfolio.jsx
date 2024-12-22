import React from "react";
import placeholder from "../assets/placeholder.png";
import "./Portfolio.css"
function Portfolio() {
	const projects = [
		{
			img: placeholder,
			title: "Git-Workshop",
			repoLink: "https://github.com/WilliamSheere/git-workshop",
			deployLink: "",
		},
		{
			img: placeholder,
			title: "Employee-Tracker",
			repoLink: "https://github.com/WilliamSheere/git-workshop",
			deployLink: "",
		},
		{
			img: placeholder,
			title: "Git-Workshop",
			repoLink: "https://github.com/WilliamSheere/git-workshop",
			deployLink: "",
		},
		{
			img: placeholder,
			title: "Git-Workshop",
			repoLink: "https://github.com/WilliamSheere/git-workshop",
			deployLink: "",
		},
		{
			img: placeholder,
			title: "Git-Workshop",
			repoLink: "https://github.com/WilliamSheere/git-workshop",
			deployLink: "",
		},
		{
			img: placeholder,
			title: "Git-Workshop",
			repoLink: "https://github.com/WilliamSheere/git-workshop",
			deployLink: "",
		},
	];
	return (
		<div>
			<div>Portfolio</div>
			<div>
				{projects.map((project) => {
					return (
						<div className="projectCard">
							<h2>{project.title}</h2>
              <a href={project.repoLink}>
              <img src={project.img} alt="" />

              </a>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Portfolio;
