import React from 'react'
import { TbSmartHome } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FcSearch } from "react-icons/fc";

import { Link } from 'react-router-dom';

const HeaderFooter = () => {
  return (
    <div>

<section className=" flex justify-center my:px-[10rem]">


<div className=" hf backdrop-blur-[15px]   w-[95%] rounded-[5px]   h-[4rem] fixed bottom-0 ">

<ul   className='flex justify-between px-[1rem]    pt-[.8rem]'>

<li> <span className=' block p-2 rounded-full bg-yellow00 border-b-[6px] border-b-slate-100 '>
  <Link to={'/'}>
<TbSmartHome  className='text-[1.7rem] text-slate-100 '/>
</Link>
    </span></li>
<li> <span className='  block p-2 rounded-full bg-yellow-00 '>
< FaRegHeart  className='text-[1.6rem] text-slate-100 relative'/>
<span className='bg-red-500 w-[1.5rem] pl-[7px] h-[1.5rem]
 rounded-full absolute top-[1rem]  left-[8.8rem] text-white'>5</span>
    </span></li>
<li> <span className=' block p-2 rounded-full bg-yellow-00 '>
< IoCartOutline  className='text-[1.7rem] text-slate-100 relative '/>

<span className='bg-red-500 w-[1.5rem] pl-[6px] h-[1.5rem]
 rounded-full absolute top-[1rem]  right-[6.8rem] text-white'>2</span>
    </span></li>
<li> <span className='  block p-2 rounded-full bg-yellow-00 '>
< FaRegUser  className='text-[1.7rem] text-slate-100'/>
    </span></li>
</ul>

</div>
</section>
    </div>
  )
}

export default HeaderFooter