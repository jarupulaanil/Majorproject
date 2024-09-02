import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

// create the context for send the data

export default function Register() {
  const [fname, setFname] = useState("");

  const [email, setEmail] = useState("");
  const [emailerrmsg, setEmailerrmsg] = useState("");

  const [password, setPassword] = useState("");
  const [errpassword, setPassworderr] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errconfirmPassword, setConfirmPassworderr] = useState("");

  const [errormessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // register handler
  const handleregister = async (e) => {
    e.preventDefault();
    console.log(fname, email);
    // authentication
    if (!fname || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailerrmsg("Invalid email format");

      return;
    }

    if (password.length < 6) {
      setPassworderr("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPassworderr("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, fname);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage(" already registered");
      } else {
        setErrorMessage("Error registering user");
        alert("Error registering user");
      }
    }
  };
  return (
    <React.Fragment>
      <div className="register-container">
        <h1 className="signup">Sign Up</h1>
        <form onSubmit={handleregister} className="register-form">
          <div className="form-group-register">
            <label htmlFor="username">UserName:</label>
            <p className="registererrmessage">{errormessage}</p>
            <input
              type="text"
              value={fname}
              autoFocus
              id="username"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          {/* user email */}
          <div className="form-group-register">
            <label htmlFor="email">Email:</label>
            <p className="registererrmessage">
              {errormessage}
              {emailerrmsg}
            </p>
            <input
              type="text"
              value={email}
              id="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* setpassword for the user */}
          <div className="form-group-register">
            <label htmlFor="password">Password:</label>
            <p className="registererrmessage">
              {errpassword}
              {errormessage}
            </p>
            <input
              type="password"
              value={password}
              id="password"
              autoFocus
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* confirm the password for  the user enters */}
          <div className="form-group-register">
            <label htmlFor="confirmpassword">Confirm_Password:</label>
            <p className="registererrmessage">
              {errconfirmPassword}
              {errormessage}
            </p>
            <input
              type="password"
              value={confirmPassword}
              id="confirmpassword"
              autoFocus
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button className="signupbtn">sign up</button>
          <span className="alreadyregiter">
            Already a User? <Link to={"/"}>Login Here</Link>
          </span>
        </form>
      </div>
    </React.Fragment>
  );
}
