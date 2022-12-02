import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/auth.context';


function ProfilePage() {
  const [account, setAccount] = useState(null);
  const { user, logout } = useContext(AuthContext);
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
    <div className='ms-4 me-4' >
      <div className='list'>
        <h3 className="text-start pt-5">Account</h3>
        <hr />
        {account && (
          <>
            <div className="text-start pt-4">
              <h6 className="fw-lighter pt-3"><b>Full Name</b></h6>
              <p className="fw-lighter text-sm-start" >{account.name}</p>

              <h6 className="fw-lighter pt-3"><b>Email Address</b></h6>
              <p className="fw-lighter text-sm-start">{account.email}</p>

              <h6 className="fw-lighter pt-3"><b>Mobile phone number</b></h6>
              <p className="fw-lighter text-sm-start">{account.phone}</p>

              <h6 className="fw-lighter pt-3"><b>Address</b></h6>
              <p className="fw-lighter text-sm-start">{account.address}</p>
            </div>
            <Link style={{ textDecoration: "none" }} to={`/account/edit/${user._id}`}>
              <button className="instButton ms-auto me-auto" >Edit Account</button>
            </Link>
          </>
        )}
        <button className="instButton ms-auto me-auto" onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default ProfilePage;
