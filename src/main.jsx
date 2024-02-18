/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes,Route
} from "react-router-dom";
import App from './App.jsx'
import './index.css'

import FoodMenu from './Components/Pages/FoodMenu.jsx';
import About from './Components/Pages/About.jsx';
import Contact from './Components/Pages/Contact.jsx';

import Fdetails from './Components/Pages/Fdetails.jsx';
import SimilarFood from './Components/Pages/SimilarFood.jsx';
import Favourite from './Components/Pages/Favourite.jsx';

const MyRouter = () => {
 const [favouriteProducts, setFavouriteProducts] = useState([]);

  return (
    <BrowserRouter>
    
    <Routes>
    <Route path ='/'  element= {<App />} />, 
    <Route path ='/Menu'  element= {<FoodMenu />} />, 
    <Route path ='/Abt'  element= {<About />} />, 
    <Route path ='/Contact'  element= { <Contact/>} />, 
    <Route path ='/saved' element={<Favourite favouriteProducts={favouriteProducts} />} />,
      {/* // pass through parameter foodname using the useParams() hook */}
    <Route path ='/Menu/:foodId'  element= {<Fdetails  setFavouriteProducts={setFavouriteProducts}/>} />, 
    <Route path ='/Menu/similar/:simiFoodId'  element= {<SimilarFood   setFavouriteProducts={setFavouriteProducts}/>} />, 
   
    </Routes>
    </BrowserRouter>
  )
}

  

 

ReactDOM.createRoot(document.getElementById('root')).render(
    <MyRouter/> 
)
