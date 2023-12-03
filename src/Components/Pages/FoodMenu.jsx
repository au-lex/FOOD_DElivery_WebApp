

import { IoCart } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import React from 'react';
import data from '../Data/data';

const FoodMenu = () => {
  return (


    <main main className="bg-slate-100 pt-[1rem]">

<div className="cartHa px-[2rem]">
<div className=" flex  justify-between mb-4">
    <div className="image flex  w-[60px] h-[60px]
     rounded-full  ">
        <img src="https://bslthemes.com/html/quickeat/assets/img/photo-5.jpg" 
        className='rounded-full w-[100%]' alt="" />
     </div>

     <div className=" text-[30px] pt-[.6rem]">Foodie.io</div>
        <div className="pt-4"><FaBagShopping className='text-[1.6rem]  text-yellow-500
         cursor-pointer '  /></div> 

</div>
    <h6 className=" text-[20px]">hello jaminel,</h6>
    <h1 className="text-[28px] font-meduim">what would you like to <span className="text-yellow-500 font-bold">eat ?</span></h1>
    </div>

    <div className="srch px-[1.5rem] my-[.5rem]">
        <input type="search" name="" id="" className="w-full py-2 rounded-[20px] " />
    </div>

    <div className=' flex flex-wrap justify-center '>
      {data.map((prod, indx) => (
        <section className='bg-slate-100 h-[20rem] 
          mx-2 rounded-[20px] shadow-2xl  mb-[1rem]'>


        <div key={indx} className='h mx-[1rem]  h-[140px] w-[140px] my:w-[132px] 
         my:h-[120px] my-[1rem]'>
          <img src={prod.img} alt="" className='hh ' />
          <figcaption className='pt-[1rem]'>
            <div className='flex  justify-between'>

          <h2 className='text-'>{prod.title}</h2>
          <p className='text-[20px] my:text-[15px] font-semibold text-yellow-700 '>#{prod.newPrice}</p>
            </div>
          <div className='mt-2'>
            <button className='bg-yellow-500 w-[100%] text-slate-100
             rounded-[20px]  h-[2.8rem]'>   Add to cart</button>
          </div>
          </figcaption>
        </div>
        {/* <div className=''>

          <h2 className='text-center'>{prod.title}</h2>
        </div> */}
        </section>
      ))}


    </div>

    </main>
  );
};

export default FoodMenu;
