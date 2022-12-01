import React from 'react'
import Image from 'react-bootstrap/Image'
import img01 from '../assets/001.jpg'
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';



function LandPage() {
    return (
        <div className="homeHeader">
            <h6>Need pain relief now? Book your massage in just a few taps.</h6>
            <Nav.Link href="/instructions" className='stdButton'><p>Get Started</p></Nav.Link>
 
        </div>
    )
}

export default LandPage