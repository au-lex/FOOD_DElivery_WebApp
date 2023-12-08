import React from 'react'
import { TbSmartHome } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
const HeaderFooter = () => {
  return (
    <div>

<section className=" flex justify-center my:px-[10rem]">


<div className=" hf backdrop-blur-[15px]   w-[95%] rounded-[20px]   h-[4rem] fixed bottom-0 ">

<ul   className='flex justify-between px-[1rem]   pt-[.4rem]'>

<li> <span className=' block p-2 rounded-full'>
<TbSmartHome  className='text-[1.7rem] text-slate-800'/>
    </span></li>
<li> <span className='  block p-2 rounded-full'>
< FaRegHeart  className='text-[1.6rem] text-slate-800'/>
    </span></li>
<li> <span className=' block p-2 rounded-full'>
< IoCartOutline  className='text-[1.7rem] text-slate-800'/>
    </span></li>
<li> <span className='  block p-2 rounded-full'>
< FaRegUser  className='text-[1.7rem] text-slate-800'/>
    </span></li>
</ul>

</div>
</section>
    </div>
  )
}

export default HeaderFooter