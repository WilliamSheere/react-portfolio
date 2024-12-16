import "./App.css";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

let num1 = 50
let num2 = 100
function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer num1={num1} num2={num2} />
		</>
	);
}

export default App;
