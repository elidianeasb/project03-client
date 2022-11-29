import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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

    <Card style={{ width: '20rem', marginTop: '100px', padding: '50px' }} className="mx-auto px-5">
        <Form onSubmit={handleLoginSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="email" value={email} onChange={handleEmail} />

            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" name="password" value={password} onChange={handlePassword} />
          </Form.Group>
          <Button variant="secondary" type="submit" style={{backgroundColor: "#422F2F", marginTop: '20px'}}>Login</Button>
          {errorMessage && <p>{errorMessage}</p>}
        </Form>
    </Card>

  );
}

export default Login;