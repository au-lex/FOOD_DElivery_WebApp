/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaCirclePlus } from "react-icons/fa6";
// import { IoCart } from "react-icons/io5";
// import { FaBagShopping } from "react-icons/fa6";
import data from '../Data/data';
// import bb from '../../assets/images/bgg.jpg'
import HeaderFooter from "../HeaderFooter";
import { FcSearch } from "react-icons/fc";
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
//
const itemsPerPage = 10;

const FoodMenu = () => {
const [Search, Setsearch] = useState('');
const [FiterData, SetFiterData] = useState(data);

const handleSearch = () =>  { 
  const filterItems = data.filter(item =>
    item.title.toLowerCase().includes(Search.toLowerCase())
  );
  SetFiterData(filterItems); 
}


useEffect(() => {
  handleSearch();
}, [Search]);

const navigate = useNavigate();

const [isModalOpen, setIsModalOpen] = useState(false);
const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};

  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [pageL, setPageL] = useState(false); 

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

return (


    <main  className="bg-white pt-[1rem] ">

<div className="cartHa px-[1rem]">
<div className=" flex  justify-between mb-4 bg-white 
  backdrop-blur-[15px] bg-opacity-80  shadow-md fixed h-[5rem] 
  pt-[.7rem] w-full z-50 px-2 top-0 left-0 right-0
">
  <div  className='image flex pt-1'>

  
    <div className="image flex  w-[50px] h-[50px]
     rounded-full  ">
        <img src="https://bslthemes.com/html/quickeat/assets/img/photo-5.jpg" 
        className='rounded-full w-[100%]' alt="" />
        </div>
        <section>

     <div className=" text-[10px] ml-4 pt-[.5rem] text-yellow-500"> Welcome ,</div>
     <div className=" text-[12px] font-meduim ml-4 ">Script dev</div>
        </section>
     </div>

        <div className="pt-2"><IoMdNotificationsOutline  className='text-[2rem] 
         text-yellow-500
         cursor-pointer '  /></div> 

</div>

    <h1 className="text-[26px] mt-[6rem] font-meduim">what would you like to <span className="text-yellow-500 font-bold">eat ?</span></h1>
    </div>

    
    <form className="px-[1rem]"> 
  <label className="block relative">
    <span className="absolute left-[1rem] top-2">

  <FcSearch className="text-[1.8rem]" />
    </span>
    <input 
     onClick={openModal}
    value={Search}
    onChange={(e) => Setsearch(e.target.value)}
    placeholder="Search all meals......" type="text" className="mt-1 
    block w-full px-3 py-2 pl-[4rem] 
    text-[21px]
     bg-white border border-slate-300 rounded-[40px]
     
        placeholder:text-[15px]
      text-sm shadow-sm placeholder-slate-400 h-[2.8rem]
      focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500
   
    "/>
  </label>
 
</form>
{/* search container */}

{isModalOpen && (
  <div className="absolute inset-0
   bg-black bg-opacity-50 z-50">
    <div className="bg-white w-full max-w-md p-6 rounded-lg">
      <form className="mb-4">
        <label className="block relative">
          <span className="absolute left-3 top-2">
            <FcSearch className="text-2xl" />
          </span>
          <input 
            value={Search}
            onChange={(e) => Setsearch(e.target.value)}
            placeholder="Search all meals..."
            type="text"
            className="mt-1 block w-full px-3 py-2 pl-10 text-lg bg-gray-100 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
          />
        </label>
      </form>
      <div className="p-4 rounded shadow-lg">
        <h2 className="text-2xl mb-4">Search Results</h2>
        {FiterData.map(item => (
          <div key={item.title} className="mb-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <p className="text-lg font-semibold">{item.title}</p>

          </div>
        ))}
        <button onClick={closeModal} className="bg-gray-400 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  </div>
)}



{/* filter section */}
    <Swiper
     
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={1}
      slidesPerView={3.5}
      
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
    src="https://res.cloudinary.com/durbee4ln/image/upload/v1701574851/FOOD_APP/Adalu_Nigerian_Beans_And_Corn_Recipe_-_Dream_Africa_1_v2vzdc.jpg" alt="" />
   <span className="pt-[1rem] pl-2">Beans</span>
  </span>
   </div>
</SwiperSlide>


<SwiperSlide>
      <div className="bg-slate-000  flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[80px] h-[80px] object-contain ml-4 rounded-full border-[2px] border-yellow-600"
    src="https://res.cloudinary.com/durbee4ln/image/upload/v1701574851/FOOD_APP/download_3_prafmg.jpg" alt="" />
   <span className="pt-[1rem] pl-2">Abacha</span>
  </span>
   </div>
</SwiperSlide>


<SwiperSlide>
      <div className="bg-slate-000  flex   h-[5rem] rounded-[40px] text-center pt-1">
  
  <span>
    <img className="w-[80px] h-[80px] ml-4 object-contain rounded-full border-[2px] border-yellow-600"
    src="https://res.cloudinary.com/durbee4ln/image/upload/v1701574885/FOOD_APP/10_MOST_POPULAR_FOOD_IN_LAGOS_NIGERIA___STREET_LIFE_mragn3.jpg" alt="" />
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

{/* food menu */}

<div className="flex flex-wrap justify-center mt-[1rem] ">
  {isLoading ? (
    // Loader component
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-900 bg-opacity-90 z-50">
      <div className="loader ease-linear rounded-full border-t-4 border-b-4 border-gray-200 h-12 w-12 animate-spin"></div>
    </div>
  ) : (
    currentItems.map((prod, indx) => (
      <section
        key={indx}
        className='h-[220px] w-[160px] mx-2 shadow-xl   my-4  border rounded-[10px] ' // Set a fixed height and width for each section
      >
        <div  onClick={() => navigate(`/Menu/${prod.id}`)} className='flex mx-[0rem] border rounded-[20px]'>
          <img
            src={prod.img}
            alt=""
            className='object-cover w-full h-[120px] ' // Set a fixed height for the image
          />
        </div>
        <div className="px-3 pt-2 fle justif-between">
          <div className="mt-2">
            <div className=''>
              <div className="flex space-x-1 my-2">
                {[...Array(5)].map((star, i) => (
                  
                  <FaStar key={i} className="text-yellow-500 text-[10px]" />
                  ))}
                 
              </div>
            </div>
            <div className="flspace-x-4 my-1">
              <div className='flex justify-between'>

              <p className="text-sm font-bold">${prod.newPrice}</p>
              <p><FaCirclePlus className='text-orange-500 cursor-pointer text-[1.5rem]' /></p>
              </div>
        <p className="mt-0 text-sm">{prod.title}</p>
            </div>
          </div>
         
        </div>
      </section>
    ))
  )}
</div>


  {/* pagination container */}
<div className='px-[2rem] '>
  
  {/* Pagination component */}
  <ReactPaginate
        pageCount={Math.ceil(data.length / itemsPerPage)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={0}
        onPageChange={handlePageChange}
        containerClassName={'pagination '}
        activeClassName={'activee'}
        breakClassName={'break-me'}
        pageClassName={'page-me '}
        previousClassName={'previous-me '}
        nextClassName={'next-me '}
      />
      </div>  
    
{/* menu-footer */}
<Footer className = 'mt-[-4rem]'/>

<HeaderFooter />

    </main>
  );
};

export default FoodMenu;





