import { useState , useEffect} from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'

import Loaderpage from './Components/OnboardingScreen'

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
  </div>
    )

    }
    
  
    </>
  )
}

export default App
