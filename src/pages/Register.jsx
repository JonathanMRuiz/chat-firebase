import React from "react";
import AddAvatar from "../assets/addAvatar.png";
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">JMR Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            placeholder="Avatar"
          />
          <label htmlFor="file">
            <img src={AddAvatar} alt="avatar" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
