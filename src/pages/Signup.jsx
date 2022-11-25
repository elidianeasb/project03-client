import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';




function Signup(props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  
  const navigate = useNavigate();
  
  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleName = (e) => setName(e.target.value);
  
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/signup`, { email, password, name });
      //redirect
      navigate('/login');
      
    } catch (error) {
      const errorDescription = error.response.data.errorMessage;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>email:</label>
        <input type="text" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to='/login'> Login</Link>
    </div>
  );
}

export default Signup;