import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

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

    <div style={{paddingTop: "50px"}}>
        <div className="card">
          <form onSubmit={handleLoginSubmit}>
            <div className="input-container">
              <input className="input" required="required" type="email" name="email" value={email} onChange={handleEmail}/>
              <label for="email">Email</label>
              <div className="bar"></div>
            </div>
            <div className="input-container">
              <input required="required" type="password" name="password" value={password} onChange={handlePassword}/>
              <label for="Password">Password</label>
              <div className="bar"></div>
            </div>
            <div className="button-container">
              <button type="submit"><span>Login</span></button>
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <div className="footer">Don't have an account? <Link to='/signup'><u>Signup</u></Link></div>
          </form>
        </div>
        </div>

  );
}

export default Login;