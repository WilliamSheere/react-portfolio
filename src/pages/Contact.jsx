import React from "react";
import Footer from "../components/Footer/Footer";
import "./Contact.css"

function Contact() {
	return (
		<div>
			<h2>I am the Contact page component</h2>
			<form id="contactForm">
				<label htmlFor="Name">Name</label>
				<input name="Name" id="Name" />
				<label htmlFor="Email">Email</label>
				<input name="Email" id="Email" />
				<label htmlFor="Message">Message</label>
				<input name="Message" id="Message" />

				<button type="submit">Submit</button>
			</form>
			
		</div>
	);
}

export default Contact;

