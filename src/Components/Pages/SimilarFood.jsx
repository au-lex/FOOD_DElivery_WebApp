

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaHeart, FaRegHeart, FaArrowLeft } from 'react-icons/fa';
import foodData from "../Data/data";
import HeaderFooter from '../HeaderFooter';
import Footer from '../Footer';

const SimilarFood = () => {
    const {simiFoodId } = useParams();
    const [food, setFood] = useState(null);

    const [similarFoods, setSimilarFoods] = useState([]);

    
    // simillar food
   
    useEffect(() => {
        const selectedFood = foodData.find(val => val.id === parseInt(simiFoodId));
        setFood(selectedFood);

        const similar = foodData.filter(item => item.category === selectedFood.category && item.id !== parseInt(simiFoodId) )
        setSimilarFoods(similar);
   
    }, [simiFoodId]);

    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(prev => !prev);
    };

    return (
         <main className="continer pt-2 pb-[2rem]  ">
           
            <Link to="/Menu" className="text-gray-600 bg-white shadow-md w-8 h-8  p-2 ml-[1rem]  rounded-full  hover:text-gray-800 flex items-center mb-4">
                <FaArrowLeft className="ml-[.4px] text-[3rem] cursor-pointer" /> 
            </Link>
            {food && (
            <div className=" items-center">
               
                <div className="flex justify-center mb-2">
                    <img src={food.img} alt={food.title} className="rounded-lg w-80 h-64 object-cover" />
                </div>

                <section className="sec px-[1rem]">
                <h1 className="text-3xl font-bold  mb-1">{food.title}</h1>
                  <div className=" justify-between flex">
                <div className="flex items-center space-x-2 ">
                    {[...Array(5)].map((star, i) => (
                        <FaStar key={i} className={`text-yellow-500 ${i < food.rating ? 'fill-current' : 'stroke-current'}`} />
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
                    <p className="text-[2rem] text-orange-400 font-bold">${food.newPrice}</p>
                    
                </div>
                <div className=" mb-4  ">
                    <h2 className="text-lg font-bold ">Description</h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Soluta eveniet ea inventore velit tempore alias impedit. Magnam, velit suscipit.
                     A, sapiente, aliquid illum quis atque nesciunt qui 
                    numquam veritatis sunt veniam vel? Possimus perspiciatis quod odio adipisci sit aliquid?</p>
                </div>
              
                <button className="bg-orange-500 text-white w-full py-2 px-4 rounded-md ">Add to Cart</button>
                </section>
            </div>
            )}

            {/* similar food */}
            <div className="mt-8">
  <h2 className="text-2xl font-bold mb-4 text-gray-800 ml-5">Similar Foods</h2>
  <div className="flex flex-wrap justify-center space-x-4">
    {similarFoods.map(similarFood => (
      <Link to={`/Menu/similar/${similarFood.id}`} key={similarFood.id}>
        <div className="relative group ">
          <img src={similarFood.img} alt={similarFood.title} className="w-[10rem] border-2
           border-orange-500 shadow-md h-[10rem] object-cover rounded-full" />
          <div className="absolute inset-0 flex h-[10rem] border-4 border-red-500
           rounded-full items-center justify-center opacity-0 bg-black bg-opacity-50 
           group-hover:opacity-100 transition duration-300">
            <button className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition duration-300">View</button>
          </div>
          <div className="p-4">
            
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>



            <HeaderFooter />
            <div className='mt-[-2rem]'>

            <Footer />
            </div>
        </main>
    );
};

export default SimilarFood;
