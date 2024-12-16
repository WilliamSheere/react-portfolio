import React from 'react'
import './Footer.css'

function Footer(props) {

  function toggleDarkMode() {
    alert("Does this toggle work?")
  }

let { num1, num2 } = props;
let darkMode = false;
let fontSize = {
  fontSize: num1 + "px"
}
    // console.log("props: ", props);
  return (
		<div className={darkMode ? "dark footer": "footer"}>
      <button onClick={toggleDarkMode}></button>
			<h2>I am the Footer</h2>
			<h4>
				The result from adding {num1} and {num2} together is {num1 + num2}
			</h4>
			<h4>
				The result from subtracting {num1} from {num2} is {num1 - num2}
			</h4>
			<h4 style={fontSize}>
				Is {num1} larger than {num2}? Here is the answer: {num1 > num2 ? "Yes" : "No"}
			</h4>
		</div>
	);
}

export default Footer