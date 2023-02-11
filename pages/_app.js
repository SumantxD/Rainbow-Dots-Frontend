import '../styles/globals.css'
import { useState, useEffect } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import Navbar from '../components/Navbar'
import DotGroup from '../components/DotGroup'
import Landing from '../components/Landing'
import LineGradient from '../components/LineGradient'
import About from '../components/About'
import Edu from '../components/Edu'


export default function App({ Component, pageProps }) {

  const [selectedPage, setSelectedPage] = useState("home"); 
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true)
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, []);


  return (
    <div className=' bg-deep-blue'>
      <Navbar
        isTopOfPage = {isTopOfPage}
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
      />
      <div className=' w-5/6 mx-auto md:h-screen'>
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage = {selectedPage}
            setSelectedPage = {setSelectedPage}
          />
        )}
        <Landing setSelectedPage = {setSelectedPage}/>
      </div>
      <LineGradient/>
      <div className=' w-5/6 mx-auto md:h-full'>
          <About/>
      </div>
      <LineGradient/>
      <div className=' w-5/6 mx-auto'>
          <Edu/>
      </div>
      <Component {...pageProps} />
    </div>

  )
}
