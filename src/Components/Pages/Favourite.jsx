/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import HeaderFooter from '../HeaderFooter';
import Header from '../Header';

const Favourite = ({ favouriteProducts}) => {
    const totalFavoriteProducts = favouriteProducts.length;

  return (
    <div className="containr">
        {/* <Header />/ */}
      <h1 className="text-2xl font-bold mb-4">Favorite Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favouriteProducts.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.img} alt={product.title} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-lg font-bold mb-1">{product.title}</h2>
            <p className="text-gray-600 mb-2">${product.newPrice}</p>
            {/* <button onClick={() => removeFromFavorites(product.id)} className="text-red-500"><FaTrash /></button> */}
          </div>
        ))}
      </div>

      <HeaderFooter totalFavoriteProducts={totalFavoriteProducts} />
    </div>
  );
};

export default Favourite;
