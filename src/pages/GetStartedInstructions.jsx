import React from 'react'
import { Link } from 'react-router-dom'
import img01 from '../assets/img01.png'
import img02 from '../assets/img02.png'
import img03 from '../assets/img03.png'


function GetStartedInstructions() {
    return (
        <div>
            <hr />
            <article>
            <img src={img01} alt="img01" className="startImg"/>                
                <h5>Choose a wellness treatment.</h5>
                <p>Pick your prefered massage technique and appointment duration.</p>
            </article>
            <article>
            <img src={img02} alt="img02" className="startImg" />                

                <h5>Select a place and time.</h5>
                <p>wherever you prefer, at home or in our space</p>
            </article>
            <article>
            <img src={img03} alt="img03" className="startImg" />                

                <h5>Relax, your're in good hands.</h5>
                <p>We are licensed, insured, and vetted</p>
            </article>

            <hr />

            <Link to="/signup">
                <button className="instButton">Continue</button>
            </Link>

        </div>
    )
}

export default GetStartedInstructions