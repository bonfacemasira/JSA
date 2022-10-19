import "./App.css";
import React, {useState} from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="App">
      <RegisterForm />
    </div>
  );
}

export default App;
