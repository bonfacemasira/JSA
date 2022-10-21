import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="wrapper">
      <h1 className="logo">JS</h1>
      <nav className="Nav">
        <button className="registerButton" as={Link} to="/login" >Login</button>
        <button className="registerButton" as={Link} to="/register">Sign Up</button>
      </nav>
    </div>
  );
}

export default NavBar;