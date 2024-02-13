import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes,Route
} from "react-router-dom";
import App from './App.jsx'
import './index.css'

import FoodMenu from './Components/Pages/FoodMenu.jsx';
import About from './Components/Pages/About.jsx';
import Contact from './Components/Pages/Contact.jsx';

import Fdetails from './Components/Pages/Fdetails.jsx';

const MyRouter = () => {
  
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path ='/'  element= {<App />} />, 
    <Route path ='/Menu'  element= {<FoodMenu />} />, 
    <Route path ='/Abt'  element= {<About />} />, 
    <Route path ='/Contact'  element= { <Contact/>} />, 
    <Route path ='/Menu/:foodId'  element= {<Fdetails />} />, 
    <Route path ='/'  element= {<App />} />, 
    </Routes>
    </BrowserRouter>
  )
}

  

 

ReactDOM.createRoot(document.getElementById('root')).render(
    <MyRouter/> 
)
