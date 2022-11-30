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
      <div style={{paddingTop: "50px"}}>
        <div className="card">
          <form onSubmit={handleSignupSubmit}>
            <div className="input-container">
              <input required="required" type="text" name="name" value={name} onChange={handleName} />
              <label for="email">Usarname</label>
              <div className="bar"></div>
            </div>
            <div className="input-container">
              <input required="required" type="text" name="email" value={email} onChange={handleEmail} />
              <label for="email">Email</label>
              <div className="bar"></div>
            </div>
            <div className="input-container">
              <input required="required" type="password" name="password" value={password} onChange={handlePassword} />
              <label for="Password">Password</label>
              <div className="bar"></div>
            </div>
            <div className="button-container">
              <button type="submit"><span>Go</span></button>
            </div>
            <div className="footer">Already have account? <Link to='/login'><u>Sign In</u></Link></div>
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        </div>
      </div>
  );
}

export default Signup;