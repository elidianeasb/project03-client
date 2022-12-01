import React from 'react'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/nav'

function HomePage() {
  return (
    <div>
    <h6>Need pain relief now? Book your massage in just a few taps.</h6>
    <Nav.Link to="/instructions" className='stdButton'><p>Get Started</p></Nav.Link>
    </div>
  )
}

export default HomePage;