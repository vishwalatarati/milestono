import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import GoogleLogo from '../images/Google.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, { email, password });
      const user = response.data;

      console.log('Login successful', user);
      localStorage.setItem("auth", JSON.stringify(user.token));
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleGoogleSignup = () => {
    window.open(`${BASE_URL}/auth/google/callback`,"_self");
  };

  return (
    <div className='login'>
      <h2 className='heading'>Milestono</h2>
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Phone number, username or email address'
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
        <div style={{ margin: '14px', textAlign: 'right' }} className='forgot-pass'>
          <Link to="/forgot-password" style={{ color: 'white', textDecoration: 'none' }}>Forgot Password?</Link>
        </div>
        <button type="button" className='buttons' onClick={handleLogin}>
          Login
        </button>
      </form>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <div className="line-with-or">
      <div className="line"></div>
      <div className="or">OR</div>
      <div className="line"></div>
    </div>
        <div type="button" style={{ display: 'flex', justifyContent: "center", margin:"10px 0" }} onClick={handleGoogleSignup}>
          <img src={GoogleLogo} alt="Google Logo" height="20"  width="20" className='google-image' /> <div>Log in with Google</div>
        </div>
      </div>
      

      <div style={{ marginTop: '10px', textAlign: 'center' } } className="sign-up">
        <p>
        <div className="line" style={{width:"400px",maxWidth:"90vw",margin:"0 0 10px 0"}} ></div>
          Don't have an account? <Link to="/signup" style={{ color: 'black',fontWeight:'700', textDecoration: 'none' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
