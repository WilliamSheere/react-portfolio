import React from "react";
import resume from "../assets/William-A-Sheere-IV-Resume.doc"

function Resume() {
	return (
		<div>
			<a href={resume} download="Resume">
				<button>Download Resume.</button>
			</a>
		</div>
	);
}

export default Resume;
