import React from 'react';

const Signup = (props) => {
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <div className="form-group">
          <input type="checkbox" id="termsCheckbox" required />
          <label htmlFor="termsCheckbox" required>
            I agree to the terms and conditions and privacy policy
          </label>
        </div>
        <button className='submit-btn' type="submit">Sign Up</button>
      </form>
      <p  onClick={() =>{props.setIsLoginOrSignup(true)} } style={{cursor:'pointer', color:'blue'}}>Already have an account? Login</p>
    </div>
  );
};

export default Signup;
