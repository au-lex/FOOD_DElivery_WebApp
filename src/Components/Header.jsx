import React, { useState } from 'react'
import logo from '../assets/images/logo_prev_ui.png'
import { CgMenuRight } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
import { SlClose } from "react-icons/sl";
import { SiIfood } from "react-icons/si";
import { TbSmartHome } from "react-icons/tb"
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineInfo } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
const Header = () => {


    const [openSidebar, setOpenSidebar] = useState(false)
    const toggleSidebar =() => {
        setOpenSidebar(!openSidebar) 
    }
  return (
    <>
{/* mobile-header */}
    <header className='flex justify-between  px-[.8rem] pt-[.6rem]'>

<section className='flex'>

    <div className="logo w-[60px] h-[50px]">
<img src={logo} alt="logo" className='w-[100%]' />
    </div>

<h2 className='font-semibold'>Foodie
 <span className='text-yellow-500 font-bold text-[1.5rem]'>.oi</span></h2>
</section>

    <nav className='flex pt-[1rem] space-x-12 '>
        <div><FaBagShopping className='text-[1.6rem] text-yellow-500 cursor-pointer '  /></div>
<div>
    <CgMenuRight className='text-[2.2rem]
     text-yellow-500 cursor-pointer ' onClick={toggleSidebar} />
</div>

    </nav>
    </header>
    
<div className={`sidebar w-[100%] pt-[2rem]  px-[1rem] fixed ${openSidebar ? "active": ""}  bg-white a z-50 top-0 bottom-0`}>
<section className='flex'>

    <div className="logo w-[60px] h-[50px]">
<img src={logo} alt="logo" className='w-[100%]' />
    </div>

<h2 className='font-semibold'>Foodie
 <span className='text-yellow-500 font-bold text-[1.5rem]'>.oi</span></h2>
</section>

<span onClick={toggleSidebar}>< SlClose className='text-[2rem] absolute right-6 
top-10' /></span>


<ul className='py-[4rem] px-[1rem]'  >


    <li className='text-[1rem] flex mb-[2.5rem] font-semibold' > <span className='pr-2'>
        <TbSmartHome className='text-[1.5rem] text-yellow-600  ' /></span>Home</li>
    <li className='text-[1rem] flex  mb-[2.5rem] font-semibold ' > <span className='pr-2'>
        <SiIfood className='text-[1.5rem] text-yellow-600 ' /></span> Food Menu</li>
    <li className='text-[1rem] flex  mb-[2.5rem] font-semibold' > <span className='pr-2'>
        <MdOutlineInfo className='text-[1.5rem]  text-yellow-600' />
        </span>About us </li>
    <li className='text-[1rem] flex  mb-[2.5rem] font-semibold' > <span className='pr-2'>
        <IoMdContacts className='text-[1.5rem] text-yellow-600 ' /></span>Contact us</li>
    <li className='text-[1rem] flex  mb-[1.8rem] font-semibold' > <span className='pr-2'>
        <IoSettingsOutline className='text-[1.4rem] text-yellow-600 ' /></span>Settings</li>

    <li className='text-[1rem] flex  mb-[1.8rem] font-semibold' > <span className='pr-2'>
        <RiLogoutCircleLine  className='text-[1.4rem] text-yellow-600 ' />
        </span>Log out</li>




</ul>
<div className="profile px-2 py-2 rounded-[10px]  flex space-x-2  pb-10">
    <div className="image flex items-center w-[80px] h-[80px]
     rounded-full bg-slate-300 ">
        <img src="https://bslthemes.com/html/quickeat/assets/img/photo-5.jpg" className='rounded-full h-[100%]' alt="" />
     </div>
     <div>

     <p className=' mt-[.7rem] font-medium'>John Doe</p>
     <p className=' font-medium'>aulexc4d2@gmail.com</p>
     </div>

</div>

</div>
 
    </>
  )
}

export default Header