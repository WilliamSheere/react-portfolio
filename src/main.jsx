import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Aboutme from './pages/Aboutme.jsx'
import Resume from "./pages/Resume.jsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Aboutme />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "portfolio",
				element: <Portfolio />,
			},
			{
				path: "resume",
				element: <Resume />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
