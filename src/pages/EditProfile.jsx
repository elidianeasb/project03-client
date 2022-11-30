import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';


function EditProfile() {
  const [name, setName] = useState('');
  const { userId } = useParams();
  const storedToken = localStorage.getItem('authToken');

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);

  const getAccount = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/account/${userId}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      })

      setName(response.data.name);
      console.log(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAccount();

}, [])

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.put(`${process.env.REACT_APP_API_URL}/edit/${userId}`, { name });

            setName("")

           navigate(`/account`); //refresh the list

    
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div>
      <h2>Edit Account</h2>
      <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' value={name} onChange={handleName} />                
                <button type="submit">Edit Account</button>
            </form>
    </div>
  )
}

export default EditProfile