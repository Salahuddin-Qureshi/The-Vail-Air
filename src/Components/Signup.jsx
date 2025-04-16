import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const Signup = () => {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p> {/* Use Link instead of <a> */}
      </form>
    </div>
  );
};

export default Signup;
