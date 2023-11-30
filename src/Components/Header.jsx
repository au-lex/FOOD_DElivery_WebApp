import React from 'react'
import logo from '../assets/images/logo_prev_ui.png'
import { CgMenuRight } from "react-icons/cg";
import { FaBagShopping } from "react-icons/fa6";
const Header = () => {
  return (
    <>
{/* mobile-header */}
    <header className='flex justify-between  px-[.8rem] pt-[1.2rem]'>

<section className='flex'>

    <div className="logo w-[60px] h-[50px]">
<img src={logo} alt="logo" className='w-[100%]' />
    </div>

<h2 className='font-semibold'>Foodie
 <span className='text-yellow-500 font-bold text-[2rem]'>.oi</span></h2>
</section>

    <nav className='flex pt-[1rem] space-x-8'>
        <div><FaBagShopping className='text-[1.6rem] text-yellow-500 cursor-pointer '  /></div>
<div>
    <CgMenuRight className='text-[1.9rem] text-yellow-500 cursor-pointer ' />
</div>
    </nav>
    </header>
 
    </>
  )
}

export default Header