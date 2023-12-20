import React from 'react'
import { useEffect, useState } from 'react';
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import {GiHotMeal} from "react-icons/gi";
import { FaStar } from "react-icons/fa6";

const Hero = () => {

    


  return (
    <>
     {/* hero-mobile */}
<main className='px-[1rem] '> 
<figure className='bg lg:flex lg:justify-between  lg:px-[4rem]'>


<figcaption className='pt-[6rem] text-slate-800 lg:w-[40%]'>
    <h1 className='text-[2.4rem] font-bold leading-[48px] text-slate-800'>The Best Restaurants In Your Home</h1>
    <p className='w-[100%] py-[1.2rem] text-[15px]'>Crave, Tap, Enjoy!

Indulge in a world of flavors with <span className='text-yellow-900 text-[1.5rem] font-bold'>Foodie.oi</span>. We've perfected seamless food delivery, connecting you to the best
 local restaurants for an extraordinary dining experience.</p>

 <div className="btn_order ">
    <button className='bg-yellow-500 w-[100%] h-[3.5rem] rounded-[10px]
     text-slate-100 text-[18px] uppercase font-semibold cursor-pointer'>order now</button>
 </div>
</figcaption>
   
       <div className=" w-[340px] h-[380px] lg:w-[500px] lg:h-[500px] mt-[2rem] relative">
    
    <img src="https://bslthemes.com/html/quickeat/assets/img/photo-1.png" alt=""  
    className='w-[100%] '/>
    <div className="ad rounded-[20px] w-[100%] h-[8rem] absolute z-20 top-[14rem]
     bg-white">
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


{/* ---------------how it works----- */}
<div className=' flex justify-center' >


    <section className=''>
<div className="hwCont mt-[1.5rem] text-center">
    <h2 className='text-slate-800 font-semibold text-[1.9rem] text-center '>
        How It Works</h2>
    <p className='mt-[.4rem] text-[15px]'>At 
     <span className='text-yellow-900 text-[1.2rem] font-bold'>Foodie.oi</span>.
      we believe in more than just delivering food.
       We're on a mission to redefine the way you
        experience meals
         . Our curated selection 
        of top-notch restaurants goes beyond the ordinary
        , offering a diverse array of cuisines that cater to every taste.</p>
</div>


<div className="deliveryProcess mt-[4rem] lg:flex">
    <figure>
        <div className='flex justify-center'>
            <img src="https://bslthemes.com/html/quickeat/assets/img/illustration-1.png" alt="" />
        </div>
        <figcaption className=''>
            <div className='text-center'>
<h1 className='capitalize text-[1.5rem] my-[.5rem] text-center font-semibold'><span className='text-[2.5rem]
 font-bold text-slate-300 mr-2'>01</span>Select  resturant</h1>
 <p className='text-[15px]'>Browse: Immerse yourself in a culinary world as you explore our carefully chosen restaurants. From cozy cafes to elegant eateries,
     the options are as diverse as your cravings.</p>
            </div>
        </figcaption>
    </figure>

    <figure className='my-[4rem]'>
        <div className='flex justify-center'>
            <img src="https://bslthemes.com/html/quickeat/assets/img/illustration-2.png" alt="" />
        </div>
        <figcaption>
            <div className='text-center'>
            <figcaption className='flex justify-center'>
            <div>
<h1 className='capitalize text-[1.5rem] my-[.5rem] font-semibold'><span className='text-[2.5rem]
 font-bold text-slate-300 mr-2'>02</span>Select  menu</h1>
 <p className='text-[15px]'>Tailor your order to perfection with our easy customization options.
     Hold the onions, extra sauce – your wish is our command.</p>
            </div>
        </figcaption>
            </div>
        </figcaption>
    </figure>

    <figure>
        <div className='flex justify-center '>
            <img src="https://bslthemes.com/html/quickeat/assets/img/illustration-3.png" alt="" />
        </div>
        <figcaption>
            <div className='text-center'>
            <figcaption className='flex justify-center'>
            <div>
<h1 className='capitalize text-[1.5rem] my-[.5rem] font-semibold'><span className='text-[2.5rem]
 font-bold text-slate-300 mr-2'>03</span>Wait for delivery</h1>
 <p className='text-[15px]'>

Track and Enjoy: Sit back, relax, and track your order in real-time. Before you know it, your delicious meal will
 be at your doorstep, ready to be savored. Simple, fast, and satisfying!</p>
            </div>
        </figcaption>
            </div>
        </figcaption>
    </figure>
</div>
    </section>

    </div>
  {/* what our favourite customers  say */}
<section className='mt-[6rem]  flex justify-center '>
       <section>

    
       <div>
        <img src="https://bslthemes.com/html/quickeat/assets/img/photo-3.png" alt="" />
       </div>

       <div className="desc">
        <h2 className='text-[2rem] text-gray-800  w-[100%] font-semibold'>Food from your favorite restaurants to your table</h2>
        <p className='py-[1.5rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Accusamus voluptate blanditiis, cupiditate officia aut
              perspiciatis eius asperiores a, doloremque fugiat atque,
             soluta aliquam harum sapiente expedita deserunt cum suscipit! Maxime.</p>

             <div>
              <button className='w-[70%] rounded-[10px] bg-yellow-500 font-semibold py-4 text-slate-100 uppercase'>order now</button>
             </div>
       </div>

       </section>
      </section>



      {/* service rating  */}
      <section className='flex justify-center mt-[3rem]'>
        <div>
            <h1 className='text-[2rem] font-semibold my-[2rem] text-slate-800'>Service shows good Taste </h1>
     
        <div className="ratingNo">
       

        <span className='flex justify-center mt-4 bg-white shadow-md rounded-[10px]'>
    <h1 className='text-[3rem] font-bold text-yellow-500 '>24</h1>
     <p className='pt-1 text-[20px]  pl-[20px]  w-[50%]'>online availabilty</p>
</span>

<span className='flex justify-center my-[4rem] shadow-md rounded-[10px]'>
    <h1 className='text-[3rem] font-bold text-yellow-500 '>976</h1>
     <p className='pt-1 text-[20px]  pl-[20px]  w-[50%]'>satisfied customers</p>
</span>

<span className='flex justify-center mt-4 shadow-md rounded-[10px]'>
    <h1 className='text-[3rem] font-bold text-yellow-500 '>1k+</h1>
     <p className='pt-1 text-[20px]  pl-[20px]  w-[40%]'>food delivered</p>
</span>

</div>
        </div>
      </section>

      {/* testimonial section */}

      <section className='flex justify-center mt-[4rem]'>
        <div>
            <h1 className='text-[2rem]  leading-[40px] text-slate-800 font-semibold'>What customers say about us</h1>

<div>
    <p className='my-4'>"I love how easy it is to find new restaurants on FOODIE.oi.
         The variety is impressive, and the delivery is always prompt!" </p>
         <div className='flex'>
            <div className='w-[50px] h-[50px] bg-slate-400 rounded-full'>

            </div>
            <span className='ml-2'>

            <h1 className='font-medium pt-[.2rem] text-lg'>John Doe</h1>
            <span className='flex'>

            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            </span>
            </span>
         </div>
</div>

            <div className='mt-[4rem]'>
                <img src="https://bslthemes.com/html/quickeat/assets/img/photo-4.png" alt="" />
            </div>
        </div>
      </section>
    </main>
    
    </>
  )
}

export default Hero