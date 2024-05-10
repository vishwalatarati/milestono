import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import GoogleLogo from '../images/Google.png';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        console.error('Passwords do not match');
        return;
      }
      console.log('Signing up with:', name, email, phone, password);
      const response = await axios.post(`${BASE_URL}/api/register`, {
        name,
        email,
        phone,
        password,
      });
      navigate('/login');
      console.log('Signup successful:', response.data.message);
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  const handleGoogleSignup = () => {
    window.open(`${BASE_URL}/auth/google/callback`,"_self");
  };

  return (
    <div className='signup'>
      <h2 className='heading'>Milestono</h2>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          className='inputss'
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email Address'
          className='inputss'
        />
        <br />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Phone Number'
          className='inputss'
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='inputss'
        />
        <br />
        <input
          type="password"
          value={confirmPassword}
          placeholder='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          className='inputss'
        />
        <br />
        <button type="button" className='buttons' onClick={handleSignup}>
          Create Account
        </button>
      </form>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <div className="line-with-or">
      <div className="line"></div>
      <div className="or">OR</div>
      <div className="line"></div>
    </div>
        <div type="button" style={{ display: 'flex', justifyContent: "center", margin:"10px 0" }} onClick={handleGoogleSignup}>
          <img src={GoogleLogo} alt="Google Logo" height="20"  width="20" className='google-image' /> <div>Continue with Google</div>
        </div>
      </div>
      <div style={{ marginTop: '10px', textAlign: 'center' } } className="sign-up">
        <p>
        <div className="line" style={{width:"400px",maxWidth:"90vw",margin:"0 0 10px 0"}} ></div>
          Already have an account? <Link to="/login" style={{ color: 'black',fontWeight:'700', textDecoration: 'none' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
