import React from 'react'
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <section className="fl flex justify-center items-center h-[100vh] px-[1rem]">

    <div id="error-page" className='text-center '>
    <span role="img" aria-label="Laughing emoji" className="text-4xl mr-2">😂</span>
    {/* <h1>See  you </h1> */}
    <p className='text-2xl text-red-500 font-bold my-[3rem]'>Techie ,,,Your Code Don Through Error.</p>
    <p className='text-red-500 bg-black p-4'>
      <i>{error.statusText || error.message}</i>
    </p>

   
  </div>
    </section>
  )
}

export default Error