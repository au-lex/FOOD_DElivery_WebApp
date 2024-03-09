
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaHeart } from "react-icons/fa";
import HeaderFooter from '../HeaderFooter';

import Loader from '../Loader';

const Favourite = ({ favouriteProducts, totalFavoriteProducts}) => {


  return (
    <div className="containr">
        <Loader />
      

      { favouriteProducts.length === 0 ? (
        <div className="saved flex justify-center items-center h-[100vh] px-4">

         <h2 className='font-meduim text-[1.5rem] text-gray-500'>No saved Item's here .....</h2>
        </div>
      ): (

        <>
        <span className="bb border-b-2 block">

        <h1 className="text-2xl font-bold mb-4 text-center pt-4 ">Favorite Products</h1>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {favouriteProducts.map(product => (
          <div key={product.id} className="bg-white p-4   border-b-2 flex justify-between ">

            <section className="flex">

        
           
<div className=' border-4 border-orange-500 w-[100px] h-[100px] rounded-full mr-4'>

            <img src={product.img} alt={product.title} className="w-[100px] rounded-[100%] h-[100px] 
            object-cover mb-2" />
</div>
            <div className='pt-4'>

            <h2 className="text-lg font-bold mb-1">{product.title}</h2>
            <p className="text-gray-600 mb-2">${product.newPrice}</p>
            </div>
            </section>
            <span className='block pt-6'>

            <FaHeart className='text-red-500 text-[2rem] ' />
            </span>
            {/* <button onClick={() => removeFromFavorites(product.id)} className="text-red-500"><FaTrash /></button> */}
          </div>
        ))}

      </div>

      </>
      )}
  
  <HeaderFooter totalFavoriteProducts={totalFavoriteProducts} />
    </div>
  );
};

export default Favourite;
