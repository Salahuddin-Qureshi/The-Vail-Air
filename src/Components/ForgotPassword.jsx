const ForgotPassword = () => {
    return (
      <div className="auth-container">
        <h2>Forgot Password</h2>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Send OTP</button>
        </form>
      </div>
    );
  };
  
  export default ForgotPassword;