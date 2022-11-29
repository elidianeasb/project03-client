import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../contexts/auth.context';


function ProfilePage() {
  const [account, setAccount] = useState(null);
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem('authToken');

  const getAccount = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/account/${user._id}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      });
      setAccount(response.data)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAccount();
  }, [user]);

  return (

    <div>
      <h2>my account</h2>

      <div>

        {account && (
          <>
            <h4><b>name:</b>{account.name}</h4>

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
/* 
<button onClick={logout}>Logout</button> */