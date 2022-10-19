import React, { useState } from "react";

function RegisterForm({props}) {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpwd, setConfirmpwd] = useState('');

  

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email);
        
    }

  return (
    <div className="auth-form-container">
      <h2>Please create a new account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}type = "email" placeholder="Email" id="email" name="email" />
        <input value={number} onChange={(e)=>setNumber(e.target.value)}type = "number" placeholder="Phone Number" id="number" name="number" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)}type = "password" placeholder="Password" id="password" name="password" />
        <input value={confirmpwd} onChange={(e)=>setConfirmpwd(e.target.value)}type = "confirmpwd" placeholder="Confirm Password" id="confirmpwd" name="confirmpwd" />
        <button type="submit">Register</button>
        </form>
        <button>Have an account? Login</button>

    </div>
  );
}

export default RegisterForm;