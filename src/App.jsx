import { useState , useEffect} from 'react'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './Components/Header'
import Hero from './Components/Hero'

import Loaderpage from './Components/OnboardingScreen'
import HeaderFooter from './Components/HeaderFooter';

function App() {
   const [Loader, SetLoader] = useState(true)
   useEffect(() => {
const delay = setTimeout(() => {
  SetLoader(false);
}, 2000);
return ()=> clearTimeout(delay); 

   }, [])
  return (
    <>
    {Loader ? (
      <Loaderpage />
    ): (
  <div>
    <Header />

<Hero />

{/* <HeaderFooter/> */}


  </div>
    )

    }
    
  
    </>
  )
}

export default App
