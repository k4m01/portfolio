import React, { useState } from 'react'
import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Project } from './components/sections/Project'
import { Contact } from './components/sections/Contact'
import oia from './assets/img/oia.gif'


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [catPlaying, setCatPlaying] = useState(false);

  return (

    <>
      {!isLoaded && <LoadingScreen onConplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Project />
        <Contact />
        {/* <div className="fixed bottom-4 right-4 ">
          <img
            src={oia}
            alt="Playing Cat"
            className={`cursor-pointer transition-transform ${catPlaying ? 'scale-35' : 'scale-30'}`}
            onClick={() => setCatPlaying(!catPlaying)}
          />
        </div> */}
      </div>
    </>

  )
}

export default App
