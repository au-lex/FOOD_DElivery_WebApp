import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'

import FoodMenu from './Components/Pages/FoodMenu.jsx';
import About from './Components/Pages/About.jsx';
import Contact from './Components/Pages/Contact.jsx';

const router = createBrowserRouter([

  
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/Menu",
    element: <FoodMenu />,
  },

  {
    path: "/Abt",
    element: <About/>,
  },

  {
    path: "/Contact",
    element: <Contact/>,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
