
import React from 'react'
import { TbSmartHome } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { GiChickenOven } from "react-icons/gi";

import { Link } from 'react-router-dom';

const HeaderFooter = ({ totalFavoriteProducts  }) => {
  

  return (
    <div>

<section className=" flex justify-center my:px-[10rem]">


<div className=" hf backdrop-blur-[15px] z-40  w-[95%] rounded-[5px]   h-[4rem] fixed bottom-0 ">

<ul   className='flex justify-between px-[1rem]    pt-[.8rem]'>

<li> <span className=' block  rounded-full bg-yellow00 borderb-[6px] border-b-slate-0 '>
  <Link to={'/'}>
<TbSmartHome  className='text-[1.7rem] text-slate-100 '/>
</Link>
    </span></li>


<li> <span className=' block  rounded-full bg-yellow00 borderb-[6px] border-b-slate-0 '>
  <Link to={'/Menu'}>
< GiChickenOven  className='text-[1.7rem] text-slate-100 '/>
</Link>
    </span></li>


    <li> 


<span className='relative'  >
<Link to={'/saved'}>   
< FaRegHeart   className='text-[1.8rem]
               text-slate-100 cursor-pointer'     />
            
            <span className='bg-red-500 top-0 pl-[8px] pt-[.5px] h-6 w-6 absolute rounded-full
             left-[1.4rem] text-white text-[14px]'>
         { totalFavoriteProducts }
            </span>
            </Link>
            </span>

</li>

<li> 


<span className='relative '  >
<Link to={'/Cart'}>            
< IoCartOutline   className='text-[1.8rem]
               text-slate-100 cursor-pointer'     />
            
            <span className='bg-red-500 top-0 pl-[8px] pt-[.5px] h-6 w-6 absolute rounded-full
             left-[1.4rem] text-white text-[14px]'>
            2
            </span>
            </Link>
            </span>

</li>



<li> 
  <span className='  block  rounded-full bg-yellow-00 '>
  <Link to={'/Profile'}>   
< FaRegUser  className='text-[1.7rem] text-slate-100'/>
</Link>
    </span>
    </li>
    </ul>

</div>
</section>
    </div>
  )
}

export default HeaderFooter