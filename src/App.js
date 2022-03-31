import React, { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Skills from './components/Skills'
import Work from './components/Work'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './components/Work.css'
import Tilt from 'react-parallax-tilt'
import SideDrawer from './components/SideDrawer'
import Blur from './components/Blur.js'
import Loading from './components/Loading'

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
    })
  }, [])

  const [active, setActive] = useState(false)
  const [loading, setLoading] = useState(true)
  console.log(active)
  document.addEventListener('scroll', console.log('scrool'))
  return (
    <div className="app">
      <Nav click={() => setActive(!active)} active={active} />
      <Blur click={() => setActive(!active)} active={active} />
      <SideDrawer active={active} click={() => setActive(!active)} />
      <div className="sections">
        <Intro />
        <Skills />
        <Work />
        <About />
      </div>
    </div>
  )
}

export default App
