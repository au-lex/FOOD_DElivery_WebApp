import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaHeart, FaRegHeart, FaArrowLeft } from 'react-icons/fa';
import foodData from "../Data/data";

const Fdetails = () => {
    const {foodId} = useParams();
    const data = foodData.filter(val => val.title === foodId.split('-').join(' '))[0];

    // State to manage favorite status
    const [isFavorite, setIsFavorite] = useState(false);

    // Function to toggle favorite status
    const toggleFavorite = () => {
        setIsFavorite(prev => !prev);
    };

    return (
        <main className="continer pt-4 ">
           
            <Link to="/Menu" className="text-gray-600 bg-white shadow-md w-8 h-8  p-2 ml-[1rem]  rounded-full  hover:text-gray-800 flex items-center mb-4">
                <FaArrowLeft className="ml-[.4px] text-[3rem] cursor-pointer" /> 
            </Link>
            <div className=" items-center">
               
                <div className="flex justify-center mb-2">
                    <img src={data.img} alt={data.title} className="rounded-lg w-80 h-64 object-cover" />
                </div>

                <section className="sec px-[1rem]">
                <h1 className="text-3xl font-bold  mb-1">{data.title}</h1>
                  <div className=" justify-between flex">
                <div className="flex items-center space-x-2 ">
                    {[...Array(5)].map((star, i) => (
                        <FaStar key={i} className={`text-yellow-500 ${i < data.rating ? 'fill-current' : 'stroke-current'}`} />
                    ))}
                </div>
                <div className="flex items-center ">
                    {isFavorite ? (
                        <FaHeart className="text-red-500 text-[2rem]  cursor-pointer" onClick={toggleFavorite} />
                    ) : (
                        <FaRegHeart className="text-red-500 text-[2rem]  cursor-pointer" onClick={toggleFavorite} />
                    )}
                    {/* <p className="ml-2">{isFavorite ? 'Saved!' : 'Save for Later'}</p> */}
                </div>
                    <p className="text-[2rem] text-orange-400 font-bold">${data.newPrice}</p>
                    
                </div>
                <div className=" mb-4  ">
                    <h2 className="text-lg font-bold mb-2">Description</h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Soluta eveniet ea inventore velit tempore alias impedit. Magnam, velit suscipit.
                     A, sapiente, aliquid illum quis atque nesciunt qui 
                    numquam veritatis sunt veniam vel? Possimus perspiciatis quod odio adipisci sit aliquid?</p>
                </div>
              
                <button className="bg-orange-500 text-white w-full py-2 px-4 rounded-md">Add to Cart</button>
                </section>
            </div>
        </main>
    );
};

export default Fdetails;
