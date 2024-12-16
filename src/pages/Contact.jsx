import React from "react";
import Footer from "../components/Footer/Footer";

function Contact() {
	let text = "I am data";

	return (
		<div>
			<h2>I am the Contact page component</h2>

			<Footer data={text} bingo="chicken" />
		</div>
	);
}

export default Contact;
