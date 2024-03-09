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

import Profile from './Components/Pages/Profile.jsx';
import Cart from './Components/Pages/Cart.jsx';
import HeaderFooter from './Components/HeaderFooter.jsx';

const MyRouter = () => {

 const [favouriteProducts, setFavouriteProducts] = useState([]);
 const totalFavoriteProducts = favouriteProducts.length;

  return (
    <BrowserRouter>
 
    <Routes>
    <Route path ='/'  element= {<App  />} />, 
    <Route path ='/Menu'  element= {<FoodMenu totalFavoriteProducts={totalFavoriteProducts} />} />, 
    <Route path ='/Abt'  element= {<About />} />, 
    <Route path ='/Contact'  element= { <Contact/>} />, 
    <Route path ='/Profile'  element= { <Profile  totalFavoriteProducts={totalFavoriteProducts}/>} />, 
    <Route path ='/Cart'  element= { <Cart totalFavoriteProducts={totalFavoriteProducts}/>} />, 
    <Route path ='/saved' element={<Favourite totalFavoriteProducts={totalFavoriteProducts} favouriteProducts={favouriteProducts} />} />,
      {/* // pass through parameter foodname using the useParams() hook */}
    <Route path ='/Menu/:foodId'  element= {<Fdetails  totalFavoriteProducts={totalFavoriteProducts} setFavouriteProducts={setFavouriteProducts}/>} />, 
    <Route path ='/Menu/similar/:simiFoodId'  element= {<SimilarFood  />} />, 
   
    </Routes>

    {/* <HeaderFooter totalFavoriteProducts={totalFavoriteProducts} /> */}
    
    </BrowserRouter>
  )
}

  

 

ReactDOM.createRoot(document.getElementById('root')).render(
    <MyRouter/> 
)
