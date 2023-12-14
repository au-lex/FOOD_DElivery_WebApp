
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { IoMdNotificationsOutline } from "react-icons/io";

import { IoCart } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import data from '../Data/data';
import bb from '../../assets/images/bgg.jpg'
import HeaderFooter from "../HeaderFooter";
import { FcSearch } from "react-icons/fc";


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
//
const itemsPerPage = 10;

const FoodMenu = () => {



  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [pageL, setPageL] = useState(false); // Add this line

  const handlePageChange = (selectedPage) => {
    setIsLoading(true);
    setPageL(true);
    setTimeout(() => {
      setCurrentPage(selectedPage.selected);
      setIsLoading(false);
      setPageL(false);
    }, 1000);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);
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

     <div className=" text-[16px] pt-[.6rem]">Foodie.io</div>
        <div className="pt-4"><IoMdNotificationsOutline  className='text-[2.2rem] 
         text-yellow-500
         cursor-pointer '  /></div> 

</div>
    {/* <h6 className=" text-[20px]">hello jaminel,</h6> */}
    <h1 className="text-[28px] font-meduim">what would you like to <span className="text-yellow-500 font-bold">eat ?</span></h1>
    </div>

    
    <form className="px-[1rem]"> 
  <label class="block relative">
    <span className="absolute left-[1rem] top-2">

  <FcSearch className="text-[2rem]" />
    </span>
    <input   placeholder="Search all meals......" type="text" class="mt-1 
    block w-full px-3 py-2 pl-[4rem] 
    text-[21px]
     bg-white border border-slate-300 rounded-[40px]
     
        placeholder:text-[15px]
      text-sm shadow-sm placeholder-slate-400 h-[2.8rem]
      focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500
   
    "/>
  </label>
 
</form>

    {/* filter region */}



    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={1}
      slidesPerView={3.5}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <div className="bg-slate-000  flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[80px] h-[80px] object-contain ml-4 rounded-full border-[2px] border-yellow-600"
    src="https://res.cloudinary.com/durbee4ln/image/upload/v1701574885/FOOD_APP/1a4aac68-213d-43a6-835c-69b094237a34_na5zy6.jpg" alt="" />
   <span className="pt-[1rem] pl-2">Rice dish</span>
  </span>
   </div>
</SwiperSlide>
     


<SwiperSlide>
      <div className="bg-slate-000  flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[80px] h-[80px] object-contain ml-4 rounded-full border-[2px] border-yellow-600"
    src="https://res.cloudinary.com/durbee4ln/image/upload/v1701574885/FOOD_APP/1a4aac68-213d-43a6-835c-69b094237a34_na5zy6.jpg" alt="" />
   <span className="pt-[1rem] pl-2">Beans dishe</span>
  </span>
   </div>
</SwiperSlide>


<SwiperSlide>
      <div className="bg-slate-000  flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[80px] h-[80px] object-contain ml-4 rounded-full border-[2px] border-yellow-600"
    src="https://res.cloudinary.com/durbee4ln/image/upload/v1701574885/FOOD_APP/1a4aac68-213d-43a6-835c-69b094237a34_na5zy6.jpg" alt="" />
   <span className="pt-[1rem] pl-2">Abacha</span>
  </span>
   </div>
</SwiperSlide>


<SwiperSlide>
      <div className="bg-slate-000  flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[80px] h-[80px] ml-4 object-contain rounded-full border-[2px] border-yellow-600"
    src="https://res.cloudinary.com/durbee4ln/image/upload/v1701574885/FOOD_APP/1a4aac68-213d-43a6-835c-69b094237a34_na5zy6.jpg" alt="" />
   <span className="pt-[1rem] pl-2">Pepper soup</span>
  </span>
   </div>
</SwiperSlide>

<SwiperSlide>
      <div className="bg-slate-000  flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[80px] h-[80px] object-contain rounded-full ml-4 border-[2px] border-yellow-600"
    src="https://res.cloudinary.com/durbee4ln/image/upload/v1701574885/FOOD_APP/1a4aac68-213d-43a6-835c-69b094237a34_na5zy6.jpg" alt="" />
   <span className="pt-[1rem] pl-2">Chicken</span>
  </span>
   </div>
</SwiperSlide>
      ...
    </Swiper>

{/* advert banner */}
<div className="px-4 rounded-[10px]">


<img src={bb} alt="" className="rounded-[10px]"/>

</div>
    <div className="flex flex-wrap justify-center mt-[1rem]">
        {isLoading ? (
          <div className='bg-red-500 top-0 bottom-0 left-0 z-50 right-0  h-screen absolute w-full'>Loading...</div> // Replace this with your Loader component
        ) : (
          currentItems.map((prod, indx) => (
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

       
            <button className='bg-yellow-600 w-[100%]  border border-red-500
             my:text-[12px] text-slate-100
             rounded-[20px]  h-[2rem]'>   Add to cart</button>

{/* <span className="bg-yellow-500 h-[2.5rem] border-red-500 border-[2px]
 
 w-[2.5rem] p-[8px] rounded-full">

< IoCart className="text-[20px] text-white" />
</span> */}

          </div>
          </figcaption>
        </div>
       
        </section>
          ))
        )}
      </div>

  
<div className='px-[2rem] pb-[5rem]'>
  
  {/* Pagination component */}
  <ReactPaginate
        pageCount={Math.ceil(data.length / itemsPerPage)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName={'pagination '}
        activeClassName={'active'}
        breakClassName={'break-me'}
        pageClassName={'page-me '}
        previousClassName={'previous-me '}
        nextClassName={'next-me '}
      />
      </div>  
    
{/* menu-footer */}

<HeaderFooter />

    </main>
  );
};

export default FoodMenu;





