import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';




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
    <Card style={{ width: '18rem', marginTop: '100px', padding: '50px' }} className="mx-auto px-5">
      <h1>Sign Up</h1>

      <Form onSubmit={handleSignupSubmit}>
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text" name="email" value={email} onChange={handleEmail} />

        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={handlePassword} />

        
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={name} onChange={handleName} />

        <Button variant="secondary" type="submit" style={{backgroundColor: "#422F2F", marginTop: '80px'}}>Sign Up</Button>
      </Form>

      {errorMessage && <p>{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to='/login'> Login</Link>
      </Card>

  );
}

export default Signup;