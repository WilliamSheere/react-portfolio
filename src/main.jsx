import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Landing from './pages/Landing.jsx'
import Contact from './pages/Aboutme.jsx'
import Portfolio from './pages/Portfolio.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { 
        index: true,
        element: <Landing />
      },
      {
        path: 'contact',
        element: <Contact />
      }, 
      {
        path: 'portfolio',
        element: <Portfolio />
      }, 
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
