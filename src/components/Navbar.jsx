import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function Navbar() {
    const { loggedIn, user, logout, profile } = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>

            {/* If user is loggdIn shows the projects */}
            {loggedIn && (
                <>
                    <Link to="/booking"> 
                        <button>Book</button>
                    </Link>
                    <Link to={`/account`}> 
                        <button>Account</button>
                    </Link>                    
                    <button onClick={logout}>Logout</button>

                    <h3>Hey there {user.email}</h3>
                </>
            )}

            {!loggedIn && (
                <>
                    <Link to="/giftcard"> 
                        <button>Gift</button>
                    </Link>
                    <Link to="/instructions">
                        <button>Get Started</button>
                    </Link>
                    <Link to="/login">
                        <button>Sign In</button>
                    </Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;