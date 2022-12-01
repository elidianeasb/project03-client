import React from 'react'
import Nav from 'react-bootstrap/Nav'

function HomePage() {
  return (
    <div>
    <h6>Need pain relief now? Book your massage in just a few taps.</h6>
    <Nav.Link to="/instructions" className='stdButton'><p>Get Started</p></Nav.Link>
    </div>
  )
}

export default HomePage;