/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaHeart, FaRegHeart, FaArrowLeft } from 'react-icons/fa';
import foodData from "../Data/data";
import HeaderFooter from '../HeaderFooter';
import Footer from '../Footer';

const Fdetails = () => {
    const {foodId} = useParams();
    const [food, Setfood] =useState(null)
    const [similarFoods, setSimilarFoods] = useState([]);

    useEffect(() => {
      const selectedFood = foodData.find(val =>  val.id === parseInt(foodId));
    Setfood(selectedFood);
    // simillar food
    const similar = foodData.filter(item => item.category === selectedFood.category && item.id !== parseInt(foodId) )
     setSimilarFoods(similar);

    }, [foodId])
    
    
    // const data = foodData.find(val => val.id === parseInt(foodId));

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
               
                <div className="flex justify-center mb-2 px-[1rem]">
                    <img src={food.img} alt={food.title} className="rounded-lg w-full h-[350px] object-cover" />
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

{/* similarfood */}




<div className="smillarFood_swiper px-[1rem] z-20 mt-5">




            {/* similar food */}

            <h2 className="text-2xl font-bold mb-4 text-gray-800 ">Similar Foods</h2>





            <Swiper
     
     modules={[Navigation, Pagination, A11y]}
     spaceBetween={1}
     slidesPerView={3.5}
     
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
   >

    
  <div className="flex justify-between space-x-3 z-20 ">
    {similarFoods.map(similarFood => (
        <div key={similarFood.id} className=" z-10">
          <SwiperSlide>
            <Link to={`/Menu/similar/${similarFood.id}`} key={similarFood.id}>
          <span className='block w-[80px] h-[120px] z-10 '>
            <img
              className=" w-full h-[80px] z-10 object-cover rounded-full"
              src={similarFood.img}
              alt={similarFood.title}
            />
            <h1 className="text-[12px] font-bold text-center mt-1">{similarFood.title}</h1>
          </span>
      </Link>
    </SwiperSlide>
        </div>
    ))}
  </div>
   </Swiper>

</div>


            <HeaderFooter />
            <div className='mt-[-2rem]'>

            <Footer />
            </div>
        </main>
    );
};

export default Fdetails;


