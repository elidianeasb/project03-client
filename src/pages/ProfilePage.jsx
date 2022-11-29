import { useContext } from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom'
import { AuthContext } from '../contexts/auth.context';
import { useState, useEffect } from "react";

import axios from "axios";


function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [loadingUser, setLoadingUser] = useState(true)
  const [books, setBooks] = useState(null);


  const getAllBooks = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');

      const response = await axios.get(`${process.env.REACT_APP_API_URL}/books`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      });

      setBooks(response.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (user && loadingUser) { // Make sure user exists before get books from user id
      setLoadingUser(false)
      getAllBooks()
    }
  }, [user]) // Depends on user data to apply

  return (

    <div>
      <h2>my account</h2>
      <div>
        {user && (
          <>
            <h4><b>email:</b> {user.email}</h4>
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
