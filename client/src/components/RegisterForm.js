import React from "react";

function RegisterForm() {

    function handleSubmit(e) {
        e.preventDefault();
    }

  return (
    <div>
        <form onSubmit={handleSubmit}></form>
    </div>
  );
}

export default RegisterForm;