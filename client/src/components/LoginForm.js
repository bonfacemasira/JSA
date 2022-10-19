import React, { useState } from "react";

function LoginForm({props}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  


    function handleSubmit(e) {
        e.preventDefault();
        console.log(email);
        
    }

  return (
    <div className="auth-form-container">
      <h2>Please login to your account</h2>
        <form className="login-form"onSubmit={handleSubmit}>
          <input value={email} onChange={(e)=>setEmail(e.target.value)}type = "email" placeholder="Email" id="email" name="email" />
          <input value={password} onChange={(e)=>setPassword(e.target.value)}type = "password" placeholder="Password" id="password" name="password" />
          <button type="submit">Log In</button>
        </form>
        <button>Don't have an account? Register.</button>
    </div>
  );
}

export default LoginForm;