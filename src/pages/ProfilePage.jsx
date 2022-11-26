import {useContext} from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../contexts/auth.context';



function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
      
      <div>
      <h2>my account</h2>

 <div>

    {user && (
    <>
    <h4><b>email:</b> {user.email}</h4>
    <h4><b>city:</b> {user.city}</h4>
    

    <Link to={`/edit/${user._id}`}>
        <button>edit profile</button>
    </Link>

    
    </>
    )}

    
 </div>

    </div>
  )
}

export default ProfilePage;