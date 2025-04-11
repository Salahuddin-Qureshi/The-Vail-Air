import "../styles/ResetPassword.css"

const ResetPassword = () => {
    return (
      <div className="auth-container">
        <h2>Reset Password</h2>
        <form>
          <input type="password" placeholder="New Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    );
  };
  
  export default ResetPassword;