import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Navigate } from 'react-router-dom';

function Anon(props) {
    const {loading, loggedIn} = useContext(AuthContext);

    //First we check if the page is still loading    
    if(loading) return <p>Loading...</p>

    //if the user is not loggedIn we redirect to the login page
    if(!loggedIn) {
        return props.children;
    //if the user is loggedIn we return the children (the page we are trying to protect)
    }else{
        return <Navigate to="/" />;
    }
}

export default Anon;