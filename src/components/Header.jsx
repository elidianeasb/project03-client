import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import Image from "react-bootstrap/Image";

function bookingsRoute(user) {
    console.log(user)
    if (user.accountType === "admin") {
        return "/admin/bookings"
    }
    return "/bookings"
}

function Header() {
    const { loggedIn, user, logout, profile } = useContext(AuthContext);

    return (

        <Navbar bg="light" expand="lg" >
            <Container >
                <Nav.Link href="/"><Image src={logo} alt="logo" className="navbar-brand" style={{width: "200px"}}/></Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        {/* If user is loggdIn shows the projects */}
                        {loggedIn && (
                            <>
                                <Nav.Link href={`/`}>Home</Nav.Link>
                                <Nav.Link href="/book"><b>Book Now</b></Nav.Link>
                                <Nav.Link href={`/account`}>Account</Nav.Link>
                                <Nav.Link href={bookingsRoute(user)}>My Appointments</Nav.Link>
                                <button className="instButton ms-auto me-auto" style={{width:"100px"}} onClick={logout}>Logout</button>
                            </>
                        )}

                        {!loggedIn && (
                            <>
                                <Nav.Link href={`/`}>Home</Nav.Link>
                                <Nav.Link href="/services">Services</Nav.Link>
                                <Nav.Link href="/instructions">Get Started</Nav.Link>
                                <Nav.Link href="/login">Sign In</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;