import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const { userId } = useParams();
  const storedToken = localStorage.getItem('authToken');

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);

  const getAccount = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/account/${userId}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      })

      setName(response.data.name);
      setEmail(response.data.email);
      setPhone(response.data.phone);
      setAddress(response.data.address);

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
      await axios.put(`${process.env.REACT_APP_API_URL}/edit/${userId}`, { name, email, phone, address });

      setName("")
      setEmail("")
      setPhone("")
      setAddress("")

      navigate(`/account`); //refresh the list

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="ms-4 me-4">
      <div className="input-group-sm mb-3" style={{marginTop:"100px"}}>
        <h6 className="fw-lighter pt-3">Name</h6>
        <input className="form-control" type="text" name='name' value={name} onChange={handleName} />
      </div>

      <div className="input-group-sm mb-3">
        <h6 className="fw-lighter pt-3">Email</h6>
        <input className="form-control fw-lighter" type="text" name='email' value={email} onChange={handleEmail} />
      </div>

      <div className="input-group-sm mb-3">
        <h6 className="fw-lighter pt-3">Phone</h6>
        <input className="form-control fw-lighter" type="text" name='phone' value={phone} onChange={handlePhone} />
      </div>

      <div className="input-group-sm mb-3">
        <h6 className="fw-lighter pt-3">Address</h6>
        <input className="form-control fw-lighter" type="text" name='address' value={address} onChange={handleAddress} />
      </div>


      <button className="instButton ms-auto me-auto mt-5" type="submit">Edit Account</button>
    </form>
  )
}

export default EditProfile