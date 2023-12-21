import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { SiMinutemailer } from "react-icons/si";
import { IoIosChatbubbles } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";

const Contact = () => {
  return (
    <>
    
       <Header/>
<section className='pt-[6rem] px-[1rem]'>
<h3 class="text-xl font-semibold mb-3">Contact us</h3>
    <p>Have questions or feedback? We're here to help and eager to hear from you!

</p>

<div className="links">

    <li className=' w-full my-[2rem] text-[18px] font-medium text-gray-700  text-center px-1 py-[2rem] border shadow-sm rounded-[10px]'>
    <span className='flex justify-center mb-4'>
    <SiMinutemailer className='text-[4rem] text-center text-yellow-500'/>  </span>  Email: support@yfooddie.oi.com 
</li>


<li className=' w-full my-[2rem] text-[18px] font-medium text-gray-700  text-center px-1 py-[2rem] border shadow-sm rounded-[10px]'>
    <span className='flex justify-center mb-4'>
    < IoIosChatbubbles className='text-[4rem] text-center text-yellow-500'/>  </span> 
 
Live Chat: Available on our website
</li>


<li className=' w-full my-[2rem] text-center text-[18px] font-medium text-gray-700  text- px-1 py-[2rem] border shadow-sm rounded-[10px]'>
    <span className='flex justify-center mb-4'>
    < PiPhoneCallFill className='text-[4rem] text-center text-yellow-500'/>  </span>  
    Phone: +2437000000000
</li>



{/* 
<p className=' text-[20px] my-[2rem]  text-gray-700 text-center '>Our dedicated customer support team is available to assist 
    you with any inquiries, concerns, or assistance you may need.
     Reach out to us via email, phone, 
     or live chat for a prompt and friendly response.</p> */}
</div>
<div>
    <img src="https://bslthemes.com/html/quickeat/assets/img/contacts-1.png" alt="" />
</div>

<div class="mb-8">
            <h3 class="text-xl font-semibold mb-3 mt-[2rem]">Get in Touch with Us</h3>
            <form action="#" method="POST">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
                        
                        <input type="text" id="name" name="name"
                         class="mt-1 p-2 block w-full border rounded-md"/>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Your Email</label>
                        <input type="email" id="email" name="email" class="mt-1
                         p-2 block w-full border rounded-md"/>
                    </div>
                </div>

                <div class="mt-4">
                    <label for="message" class="block text-sm font-medium text-gray-700">Your Message</label>
                    <textarea id="message" name="message" rows="4" class="mt-1 p-2 block w-full border rounded-md"></textarea>
                </div>

                <div class="mt-4">
                    <button type="submit" class="px-4 py-4 bg-yellow-500 text-white rounded-md">Send Message</button>
                </div>
            </form>
        </div>
   
</section>

       <Footer/>
      
    </>
  )
}

export default Contact