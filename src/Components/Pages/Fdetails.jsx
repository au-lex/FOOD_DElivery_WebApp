import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaHeart, FaRegHeart, FaArrowLeft } from 'react-icons/fa';
import foodData from "../Data/data";
import HeaderFooter from '../HeaderFooter';

const Fdetails = () => {
    const {foodId} = useParams();
    // const data = foodData.filter(val => val.id === foodId.id);
    const data = foodData.find(val => val.id === parseInt(foodId));

    const [isFavorite, setIsFavorite] = useState(false);

   
    const toggleFavorite = () => {
        setIsFavorite(prev => !prev);
    };

    return (
        <main className="continer pt-2 pb-[2rem]  ">
           
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
                    <h2 className="text-lg font-bold ">Description</h2>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Soluta eveniet ea inventore velit tempore alias impedit. Magnam, velit suscipit.
                     A, sapiente, aliquid illum quis atque nesciunt qui 
                    numquam veritatis sunt veniam vel? Possimus perspiciatis quod odio adipisci sit aliquid?</p>
                </div>
              
                <button className="bg-orange-500 text-white w-full py-2 px-4 rounded-md ">Add to Cart</button>
                </section>
            </div>
            <HeaderFooter />
        </main>
    );
};

export default Fdetails;


// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { FaStar, FaHeart, FaRegHeart, FaArrowLeft } from 'react-icons/fa';
// import foodData from "../Data/data";
// import HeaderFooter from '../HeaderFooter';

// const Fdetails = () => {
//     const {foodId} = useParams();
//     const [food, setFood] = useState(null);
//     const [similarFoods, setSimilarFoods] = useState([]);

//     useEffect(() => {
//         const selectedFood = foodData.find(val => val.id === parseInt(foodId));
//         setFood(selectedFood);

//         // Filter similar foods based on a common criteria, for example, food category.
//         const similar = foodData.filter(item => item.category === selectedFood.category && item.id !== parseInt(foodId));
//         setSimilarFoods(similar);
//     }, [foodId]);

//     const [isFavorite, setIsFavorite] = useState(false);

//     const toggleFavorite = () => {
//         setIsFavorite(prev => !prev);
//     };

//     return (
//         <main className="container pt-2 pb-[2rem]">
//             <Link to="/Menu" className="text-gray-600 bg-white shadow-md w-8 h-8 p-2 ml-[1rem] rounded-full hover:text-gray-800 flex items-center mb-4">
//                 <FaArrowLeft className="ml-[.4px] text-[3rem] cursor-pointer" /> 
//             </Link>
//             {food && (
//                 <div className="items-center">
//                     <div className="flex justify-center mb-2">
//                         <img src={food.img} alt={food.title} className="rounded-lg w-80 h-64 object-cover" />
//                     </div>
//                     <section className="sec px-[1rem]">
//                         <h1 className="text-3xl font-bold mb-1">{food.title}</h1>
//                         <div className="justify-between flex">
//                             <div className="flex items-center space-x-2 ">
//                                 {[...Array(5)].map((star, i) => (
//                                     <FaStar key={i} className={`text-yellow-500 ${i < food.rating ? 'fill-current' : 'stroke-current'}`} />
//                                 ))}
//                             </div>
//                             <div className="flex items-center ">
//                                 {isFavorite ? (
//                                     <FaHeart className="text-red-500 text-[2rem] cursor-pointer" onClick={toggleFavorite} />
//                                 ) : (
//                                     <FaRegHeart className="text-red-500 text-[2rem] cursor-pointer" onClick={toggleFavorite} />
//                                 )}
//                             </div>
//                             <p className="text-[2rem] text-orange-400 font-bold">${food.newPrice}</p>
//                         </div>
//                         <div className="mb-4">
//                             <h2 className="text-lg font-bold">Description</h2>
//                             <p className="text-sm">{food.description}</p>
//                         </div>
//                         <button className="bg-orange-500 text-white w-full py-2 px-4 rounded-md">Add to Cart</button>
//                     </section>
//                 </div>
//             )}
    
//             <HeaderFooter />
//             <div className="mt-8">
//                 <h2 className="text-xl font-bold mb-4">Similar Foods</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {similarFoods.map(similarFood => (
//                         <div key={similarFood.id} className="border rounded-md p-4">
//                             <img src={similarFood.img} alt={similarFood.title} className="w-full h-40 object-cover mb-2 rounded-md" />
//                             <h3 className="text-lg font-bold mb-1">{similarFood.title}</h3>
//                             <p className="text-sm text-gray-600">{similarFood.category}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default Fdetails;

