import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

// import LoginForm from "./components/LoginForm";
// import RegisterForm from "./components/RegisterForm";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
  <div className="App">
    <NavBar />
  </div>);
}

export default App;
