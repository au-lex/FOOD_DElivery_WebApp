import React from 'react'
import logo from '../assets/images/logo_prev_ui.png'
const Footer = () => {
  return (
    <>
    <section className='ft w-full min-h-[20rem] pt-[2rem] mt-[4rem] px-[1rem]'> 
    <footer>

<div className="footerlogo">
    <div className='w-[80px] h-[80px]'>

<img src={logo} alt="" className='w-full' />
    </div>

    <div className="ftdesc">
        
<figcaption className='pt-[1rem] text-slate-100 '>
    <h1 className='text-[1.5rem] font-bold w-[80%] leading-[30px] text-slate-100'>The Best Restaurants In Your Home</h1>
    <p className='w-[100%] py-[1.2rem] text-[15px]'>Crave, Tap, Enjoy!

Indulge in a world of flavors with <span className='text-yellow-500 text-[1.5rem] font-bold'>Foodie.oi</span>. We've perfected seamless food delivery, connecting you to the best
 local restaurants for an extraordinary dining experience.</p>

</figcaption>
    </div>
</div>
{/*  */}

    <div class="footer-container">
        <div class="footer-menu">
            <ul className='text-slate-100 mt-[2rem]'>
                <li className='mb-2'>Home</li>
                <li className='mb-2'>About Us</li>
                <li className='mb-2'> Restaurants</li>
                <li className='mb-2'>Contacts</li>
            </ul>
        </div>

    </div>
        <div className="contacts mt-[2rem]">
        <div class="footer-contacts text-slate-100">
            <p>1717 Harrison St, San Francisco, CA 94103, United States</p>
            <p>Email: quickeat@mail.net</p>
            <p>Phone: +1 425 326 16 27</p>
        </div>
    <div class="footer-copyright text-slate-100">
        <p>&copy; 2022. Quickeat. All rights reserved.</p>
    </div>
    <div class="footer-policy text-slate-100 pb-[2rem]">
        <p><a href="#">Privacy Policy</a> | <a href="#">Terms & Services</a></p>
    </div>
   
    </div>
</footer>

    </section>
    
    </>
  )
}

export default Footer