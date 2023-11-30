import React from 'react'
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const Hero = () => {
  return (
    <>
     {/* hero-mobile */}
<main className='px-[1rem]'> 
<figure>


<figcaption className='pt-[2rem] text-slate-800'>
    <h1 className='text-[2.7rem] font-bold leading-[55px] text-slate-800'>The Best Restaurants In Your Home</h1>
    <p className='w-[100%] py-[1.2rem] text-[15px]'>Crave, Tap, Enjoy!

Indulge in a world of flavors with <span className='text-yellow-900 text-[1.5rem] font-bold'>Foodie.oi</span>. We've perfected seamless food delivery, connecting you to the best
 local restaurants for an extraordinary dining experience.</p>

 <div className="btn_order ">
    <button className='bg-yellow-500 w-[50%] h-[4rem] rounded-[10px]
     text-slate-100 text-[18px] uppercase font-semibold cursor-pointer'>order now</button>
 </div>
</figcaption>
   
       <div className=" w-[350px] h-[200px] mt-[2rem] relative">
    
    <img src="https://bslthemes.com/html/quickeat/assets/img/photo-1.png" alt=""  
    className='w-[100%] '/>
    <div className="ad rounded-[20px] w-[100%] h-[8rem] absolute z-50 top-[14rem]
     bg-slate-100">
<div className='flex  items-center h-[8rem]   space-x-4 px-[1rem]'>
<img src="https://bslthemes.com/html/quickeat/assets/img/photo-2.jpg" alt="" /> 
<div>
    <span>Resturant of the month</span>
    <h4 className='capitalize  font-semibold text-[1.5rem]'>the Wilmignton</h4>
    <span className='flex text-yellow-500'>
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar/>
        <IoIosStarHalf />
      
    </span>
</div>
</div>
       
    </div>
    </div>
    </figure>
    </main>
    
    </>
  )
}

export default Hero