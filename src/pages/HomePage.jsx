import React from 'react'
import Image from 'react-bootstrap/esm/Image'
import video from '../assets/video03.mp4'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

function HomePage() {
  return (
    <div className='main' style={{ marginTop: "50px" }}>
      <div className='overlay'></div>
      <video src={video} autoPlay loop muted className="bgVideo" />
      <div className='content'>
        <Image src={logo} alt="logo" className="navbar-brand" style={{ width: "300px", marginBottom: "100px" }} />
        <h2>Need pain relief now? Book your massage in just a few taps.</h2>
        <div className='d-flex justify-content-evenly '>
          <Link to="/login" className='btnStart'>Login</Link>
          <Link to="/signup" className='btnGetStart'>Get Started</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage;