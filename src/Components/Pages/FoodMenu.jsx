

import { IoCart } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import React from 'react';
import data from '../Data/data';
import bb from '../../assets/images/bgg.jpg'
import HeaderFooter from "../HeaderFooter";

// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const FoodMenu = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//  autoplay: true,
//   autoplaySpeed: 2000,
  
   
   
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
  return (


    <main main className="bg-slate-100 pt-[1rem] ">

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

    {/* <div className="srch px-[1.5rem] my-[.5rem]">
        <input type="search" name="" id="" placeholder="Search meal" 
        className="w-full border-yellow-800 
         border-[2px] px-4 capitalize text-[15px] placeholder:text-slate-400   placeholder:italic
         outline-none  py-2 rounded-[20px] " />
    </div> */}
    <form className="px-[1rem]"> 
  <label class="block">
    
  
    <input type="text" class="mt-1 block w-full px-3 py-2
     bg-white border border-slate-300 rounded-[40px]
      text-sm shadow-sm placeholder-slate-400 h-[2.8rem]
      focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500
   
    "/>
  </label>
 
</form>

    {/* filter region */}

<section className="flex space-x-4 px-6 py-4  w-[100%]">


<div className="bg-slate-000  flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[50px] h-[50px] object-contain rounded-full border-[2px] border-red-600"
    src="https://res.cloudinary.com/durbee4ln/image/upload/v1701574885/FOOD_APP/1a4aac68-213d-43a6-835c-69b094237a34_na5zy6.jpg" alt="" />
  </span>
   <span className="pt-[1rem] pl-2">Rice</span></div>


   <div className="bg-slate-000  flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[50px] h-[50px] object-contain rounded-full border-[2px] border-red-600"
    src="https://res.cloudinary.com/durbee4ln/image/upload/v1701574885/FOOD_APP/1a4aac68-213d-43a6-835c-69b094237a34_na5zy6.jpg" alt="" />
  </span>
   <span className="pt-[1rem] pl-2">Beans</span></div>


   <div className="bg-slate-000  flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[50px] h-[50px] object-contain rounded-full border-[2px] border-red-600"
    src="https://res.cloudinary.com/durbee4ln/image/upload/v1701574885/FOOD_APP/1a4aac68-213d-43a6-835c-69b094237a34_na5zy6.jpg" alt="" />
  </span>
   <span className="pt-[1rem] pl-2">Beans</span></div>


   {/* <div className="bg-slate-000 w-[40%] flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[70px] h-[70px] object-contain rounded-full border-[2px] border-red-600"
    src="https://res.cloudinary.com/durbee4ln/image/upload/v1701574885/FOOD_APP/1a4aac68-213d-43a6-835c-69b094237a34_na5zy6.jpg" alt="" />
  </span>
   <span className="pt-[1.5rem] pl-2">abacha</span></div>


   <div className="bg-slate-000 w-[45%] flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[70px] h-[70px] object-contain rounded-full border-[2px] border-red-600"
    src="https://res.cloudinary.com/durbee4ln/image/upload/v1701574885/FOOD_APP/1a4aac68-213d-43a6-835c-69b094237a34_na5zy6.jpg" alt="" />
  </span>
   <span className="pt-[1.5rem] pl-2">Nkwobi</span></div> */}


{/* 
Aulex_0
12:15 PM (9 minutes ago)
to me

https://doctorondemand.com/
https://docs.google.com/document/d/1v16TzNo_HEw1By1Lo-NeRaLjE0aH16FzaFTkPabVO2s/edit?usp=sharing
https://docs.google.com/document/d/1BANR8lz8m0lPESEfluamG--49htHRbGDEErcCxHR2mo/edit?usp=sharing */}


</section>


{/* advert banner */}
<div className="px-4 rounded-[10px]">


<img src={bb} alt="" className="rounded-[10px]"/>

</div>


    <div className=' flex flex-wrap justify-center mt-[1rem] '>
      {data.map((prod, indx) => (
        <section className=' h-[25rem] bg-slate-100   shadow-2xl 
          mx-2 rounded-[20px] my:h-[16rem]   mb-[1rem]'>


        <div key={indx} className='h mx-[1rem] border border-red-500  h-[140px] w-[140px] my:w-[132px] 
         my:h-[120px] my-[1rem]'>
          <img src={prod.img} alt="" className='hh ' />
          <figcaption className='pt-[1rem]  '>
            <div className='flex  justify-between'>

          <h2 className='my:text-[12px]'>{prod.title}</h2>
         
            </div>
            <p className='text-[20px] my:text-[18px] font-semibold
           text-yellow-700 '>#{prod.newPrice}</p>
          <div className='mt-2 flex   justify-between'>

       
            <button className='bg-rose-500 w-[100%]  border border-red-500
             my:text-[12px] text-slate-100
             rounded-[20px]  h-[2rem]'>   Add to cart</button>

{/* <span className="bg-yellow-500 h-[2.5rem] border-red-500 border-[2px]
 
 w-[2.5rem] p-[8px] rounded-full">

< IoCart className="text-[20px] text-white" />
</span> */}

          </div>
          </figcaption>
        </div>
        {/* <div className=''>

          <h2 className='text-center'>{prod.title}</h2>
        </div> */}
        </section>
      ))}


    </div>


{/* menu-footer */}

<HeaderFooter />

    </main>
  );
};

export default FoodMenu;





