import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../contexts/auth.context'

function LoginClient(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const {storeToken, authenticateUser} = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password });

        //Store the token that we get from the login request
        storeToken(response.data.authToken);

        //Validade the token
        authenticateUser();

        //redirect
        navigate('/');
        
    } catch (error) {
        const errorDescription = error.response.data.errorMessage;
        setErrorMessage(errorDescription);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />

        <button type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}

    </div>
  );
}

export default LoginClient;