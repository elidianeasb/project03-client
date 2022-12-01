import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Navigate } from 'react-router-dom';

function Admin(props) {
    const {user} = useContext(AuthContext);

    if(user && user.accountType !== "admin") {
        return <Navigate to="/"/>
    }else{
        return props.children;
    }
}
export default Admin;