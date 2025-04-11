import React from 'react';

const OTPVerification = () => {
  return (
    <div className="auth-container">
      <h2>Verify OTP</h2>
      <form>
        <input type="text" placeholder="Enter OTP" required />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default OTPVerification;