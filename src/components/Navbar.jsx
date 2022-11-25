import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function Navbar() {
    const { loggedIn, user, logout } = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>

            {/* If user is loggdIn shows the projects */}
            {loggedIn && (
                <>
                    <Link to="/projects"> 
                        <button>Projects</button>
                    </Link>
                    <button onClick={logout}>Logout</button>
                    <h3>Hey there {user.email}</h3>
                </>
            )}

            {!loggedIn && (
                <>
                    <Link to="/signup">
                        <button>Signup</button>
                    </Link>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;