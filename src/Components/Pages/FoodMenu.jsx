

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

     <div className=" text-[20px] pt-[.6rem]">Foodie.io</div>
        <div className="pt-4"><FaBagShopping className='text-[1.6rem]  text-yellow-500
         cursor-pointer '  /></div> 

</div>
    {/* <h6 className=" text-[20px]">hello jaminel,</h6> */}
    <h1 className="text-[28px] font-meduim">what would you like to <span className="text-yellow-500 font-bold">eat ?</span></h1>
    </div>

    <div className="srch px-[1.5rem] my-[.5rem]">
        <input type="search" name="" id="" className="w-full py-2 rounded-[20px] " />
    </div>

    {/* filter region */}

<section className="flex space-x-4 px-6 py-4 ">

<div className="bg-slate-200 w-[100%]   shadow-lg h-[2rem] rounded-[20px] text-center pt-1">Rice</div>
<div className="bg-slate-200 w-[100%]  shadow-lg h-[2rem] rounded-[20px] text-center pt-1">Beans</div>
<div className="bg-slate-200 w-[100%] shadow-lg h-[2rem] rounded-[20px] text-center pt-1"> Soup</div>
<div className="bg-slate-200 w-[100%] shadow-lg h-[2rem] rounded-[20px] text-center pt-1"> Meat</div>



</section>




    <div className=' flex flex-wrap justify-center '>
      {data.map((prod, indx) => (
        <section className=' h-[25rem] bg-slate-100   shadow-2xl 
          mx-2 rounded-[20px] my:h-[16rem]   mb-[1rem]'>


        <div key={indx} className='h mx-[1rem] border border-red-500  h-[140px] w-[140px] my:w-[132px] 
         my:h-[120px] my-[1rem]'>
          <img src={prod.img} alt="" className='hh ' />
          <figcaption className='pt-[1rem]  '>
            <div className='flex  justify-between'>

          <h2 className='my:text-[12px]'>{prod.title}</h2>
          <p className='text-[15px] my:text-[15px] font-semibold text-yellow-700 '>#{prod.newPrice}</p>
            </div>
          <div className='mt-2'>
            <button className='bg-yellow-500 w-[100%]  border border-red-500
             my:text-[12px] text-slate-100
             rounded-[20px]  h-[2rem]'>   Add to cart</button>
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
