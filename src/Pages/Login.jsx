import React from 'react';
import './LoginandSignup.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button className='submit-btn' type="submit">Login</button>
      </form>
      <p onClick={() =>{props.setIsLoginOrSignup(false)}} style={{cursor:'pointer', color:'blue'}}>Don't have an account? Sign Up</p>
    </div>
  );
};

export default Login;
