import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { FaFacebookF,  FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


const About = () => {
  return (
    <>
    
    < Header/>


<section className='px-[1rem]'>
    <div className='pt-[6rem]'>
        <h1 className='text-[2rem] mb-4 font-medium leading-[40px]'>Nothing to worry about with Foodie.oi</h1>
        <p>At Foodie.oi, our journey is rooted
             in a deep passion for connecting people with exceptional 
             food experiences. We embarked on this adventure with a straightforward goal:
              to make delicious food accessible to everyone, anytime, and anywhere. We believe that great meals have 
            the power to bring joy, comfort, and unforgettable
             moments to people's lives.</p>
    </div>
    <div className='mt-[2rem]'>
        <img src="https://bslthemes.com/html/quickeat/assets/img/photo-9.jpg" className='rounded-[30px]' alt="" />
    </div>

{/* our mission  */}

<section >
   

    <div>

        <h1  className='text-[2rem] mb-2 mt-[4rem] font-medium leading-[40px]'>Our Mission</h1>
        <p>
Our mission extends beyond mere food delivery; it's about
 fostering connections and creating delightful memories
  through the joy of shared meals. We strive to elevate your 
  dining experience by curating a diverse range of culinary offerings,
 from local favorites to international delights.</p>
    </div>
    <div className='mt-[4rem]'>
        <img src="https://bslthemes.com/html/quickeat/assets/img/illustration-5.png" alt="" />
    </div>
</section>


{/* our team */}

<section>
    <div>
        <h1  className='text-[2rem] mt-[4rem] mb-1 font-medium leading-[40px]'>Meet the Team</h1>
        <p>
Behind the scenes, a dedicated and passionate team drives the success of 
Foodie.io. Get to know the faces and stories of the individuals

 committed to ensuring that your experience with every order is seamless and enjoyable.
  From customer support specialists to delivery professionals,
 each member plays a crucial role in making your food journey exceptional.</p>
    </div>

    <section className='flex justify-center flex-wrap'>

    <div className='mb-[4rem]'>
        <img src="https://bslthemes.com/html/quickeat/assets/img/team-2.png" alt="" />
        <div>
            <h1 className='text-[20px]  text-center font-semibold pt-4'>Jean lauea - CEO and Founder:</h1>
            <p className='my-2'>
                 With a vision for culinary excellence, John founded Foodie.oi
                 to revolutionize the way people experience food delivery.</p>
                 <span className='flex space-x-5 justify-center mt-[1rem]'>
                    <span className='h-[30px] w-[30px] pl-[.2rem] pt-[2.6px] pointer  rounded-full border-[2px] block border-gray-400'> 
                 <FaInstagram  className=' text-[1.2rem] text-gray-500'/>
                    </span>
                    <span className='h-[30px] w-[30px] pl-[.2rem] pt-[2.6px] pointer  rounded-full border-[2px] block border-gray-400'> 
                 < FaFacebookF  className=' text-[1.2rem] text-gray-500'/>
                    </span>
                    <span className='h-[30px] w-[30px] pl-[.3rem] pt-[2.6px] pointer  rounded-full border-[2px] block border-gray-400'> 
                 < FaTwitter className=' text-[1.2rem] text-gray-500'/>
                    </span>
                 </span>
        </div>
    </div>

    
    <div className='mb-[4rem]'>
        <img src="https://bslthemes.com/html/quickeat/assets/img/team-3.png" alt="" />
        <div>
            <h1 className='text-[20px] text-center font-semibold pt-4'> Jonny Smith - Customer Experience Specialist: :</h1>
            <p className='my-2'>
           Jane is 
            the friendly voice behind our customer support. She ensures that every interaction with 
            Foodie
             is as delightful as the meals we deliver..</p>
             <span className='flex space-x-5 justify-center mt-[1rem]'>
                    <span className='h-[30px] w-[30px] pl-[.2rem] pt-[2.6px] pointer  rounded-full border-[2px] block border-gray-400'> 
                 <FaInstagram  className=' text-[1.2rem] text-gray-500'/>
                    </span>
                    <span className='h-[30px] w-[30px] pl-[.2rem] pt-[2.6px] pointer  rounded-full border-[2px] block border-gray-400'> 
                 < FaFacebookF  className=' text-[1.2rem] text-gray-500'/>
                    </span>
                    <span className='h-[30px] w-[30px] pl-[.3rem] pt-[2.6px] pointer  rounded-full border-[2px] block border-gray-400'> 
                 < FaTwitter className=' text-[1.2rem] text-gray-500'/>
                    </span>
                 </span>
        </div>
    </div>

    
    <div className='mb-[2rem]'>
        <img src="https://bslthemes.com/html/quickeat/assets/img/team-1.png" alt="" />
        <div>
            <h1 className='text-[20px]  text-center font-semibold pt-4'>  Alex 
                 Thompson - Technology Architect:</h1>
            <p className='my-2'>
               Alex is the tech whiz behind our platform, constantly innovating to provide you with a 
                 seamless and efficient ordering experience.</p>
                 <span className='flex space-x-5 justify-center mt-[1rem]'>
                    <span className='h-[30px] w-[30px] pl-[.2rem] pt-[2.6px] pointer  rounded-full border-[2px] block border-gray-400'> 
                 <FaInstagram  className=' text-[1.2rem] text-gray-500'/>
                    </span>
                    <span className='h-[30px] w-[30px] pl-[.2rem] pt-[2.6px] pointer  rounded-full border-[2px] block border-gray-400'> 
                 < FaFacebookF  className=' text-[1.2rem] text-gray-500'/>
                    </span>
                    <span className='h-[30px] w-[30px] pl-[.3rem] pt-[2.6px] pointer  rounded-full border-[2px] block border-gray-400'> 
                 < FaTwitter className=' text-[1.2rem] text-gray-500'/>
                    </span>
                 </span>
        </div>
    </div>
    </section>
</section>

</section>


    
    
    
    
    < Footer/>

    </>
  )
}

export default About