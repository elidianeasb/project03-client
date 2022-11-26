import React from 'react'
import { Link } from 'react-router-dom'

function GetStartedInstructions() {
    return (
        <div>
            <h1>Choose a wellness treatment.</h1>
            <p>Pick your prefered massage technique and appointment duration.</p>
            <h1>Select a place and time.</h1>
            <p>Whetver you're at home or travelling, we came to you from 8am to 8pm</p>

            <h1>Select a place and time.</h1>
            <p>wherever you prefer, at home or in our space</p>


            <h1>Relax, your're in good hands.</h1>
            <Link to="/signup">
                <button>Continue</button>
            </Link>

        </div>
    )
}

export default GetStartedInstructions