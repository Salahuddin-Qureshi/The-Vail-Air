import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import "../styles/Login.css"

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p><Link to="/forgot-password">Forgot Password?</Link></p> {/* Updated to use Link */}
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p> {/* Updated to use Link */}
      </form>
      <p><Link to="/">Back to Home</Link></p> {/* Link to go back to home page */}
    </div>
  );
};

export default Login;
