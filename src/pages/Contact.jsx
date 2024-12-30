import { useState } from "react";
import Footer from "../components/Footer/Footer";
import "./Contact.css";

function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [notification, setNotification] = useState("");
	function handleName(event) {
		const nameValue = event.target.value;
		setName(nameValue);
	}
	function handleEmail(event) {
		const emailValue = event.target.value;
		setEmail(emailValue);
	}
	function handleMessage(event) {
		const messageValue = event.target.value;
		setMessage(messageValue);
	}
	function handleBlur(event) {
		const inputName = event.target.name;
		const inputValue = event.target.value;
		console.log(inputName);
		if (inputValue.length === 0) {
			setNotification("Field cannot be empty.");
		} else if (inputValue.length > 0) {
			setNotification("");
		}
		if (inputName === "Email" && !email.includes("@")) {
			setNotification("Email is invalid.");
		} else if (inputName === "Email" && email.includes("@")) {
			setNotification("");
		}
	}
	return (
		<div>
			<h2>{notification}</h2>
			<form id="contactForm">
				<label htmlFor="Name">Name</label>
				<input
					name="Name"
					id="Name"
					onBlur={handleBlur}
					value={name}
					onChange={handleName}
				/>
				<label htmlFor="Email">Email</label>
				<input
					name="Email"
					id="Email"
					value={email}
					onChange={handleEmail}
					onBlur={handleBlur}
				/>
				<label htmlFor="Message">Message</label>
				<input
					name="Message"
					id="Message"
					value={message}
					onChange={handleMessage}
					onBlur={handleBlur}
				/>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Contact;
