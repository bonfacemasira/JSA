import React from "react";

function LoginForm() {

    function handleSubmit(e) {
        e.preventDefault();
    }

  return (
    <div>
        <form onSubmit={handleSubmit}></form>
    </div>
  );
}

export default LoginForm;