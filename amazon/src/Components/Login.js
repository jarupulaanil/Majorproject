import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  // we can navigate toa my page using this navigate hook
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg, setErrmsg] = useState("");

  const inputref = useRef();
  const email1 = "anil@gmail.com";
  const password1 = "anilkumar";

  // use the useeffect for focusing the input field for updating dom element
  useEffect(() => {
    inputref.current.focus();
  }, []);

  // this page takes times so we add the async
  const signin = async (e) => {
    // prevent the page from refresh
    e.preventDefault();
    console.log(email);
    console.log(password);

    // authentication for the login page

    if (!email || !password) {
      setErrmsg("All fields are required");
      return;
    }

    if (email === email1 && password === password1) {
      console.log("logined successfully");
      navigate("/home");
    } else {
      setErrmsg("Invalid  credentials");
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      //  update the error messge
      setErrmsg("Invalid email and password");
    }
  };

  return (
    <React.Fragment>
      <div className="Container_Login_page">
        <div className="row">
          {/* column for the form page,user login or register */}
          <div className="col-sm-12 login_page">
            {/* header image for looking good */}
            <img
              className="imagelogin"
              alt="imagelogin"
              src="./Images/loginimageback.png"
            />

            {/* login to home page */}
            <Link to="/Home">
              <img
                className="Login_page_image"
                src="./Images/amazonheaderlogo.png"
                alt="Login_page_image"
              />
            </Link>

            {/* title */}
            <h1 className="login_title">Sign-in</h1>

            <form action="login.js" className="form_page">
              {/*  email id*/}
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <span className="loginerrmsg">{errmsg}</span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  ref={inputref}
                  type="text"
                  value={email}
                  autoFocus={true}
                  placeholder="Enter Email"
                  // className="form-control"
                  id="email"
                />
              </div>

              {/* User password */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <span className="loginerrmsg">{errmsg}</span>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  ref={inputref}
                  autoFocus={true}
                  value={password}
                  type="password"
                  placeholder="Enter Password"
                  // className="form-control"
                  id="password"
                />
              </div>

              {/* sign in button */}
              <button className=" loginbutton " onClick={signin}>
                Sign-in
              </button>

              {/* check box for the agreements */}
              <div className="form-check">
                <label className="terms_con">terms&conditions</label>

                <input
                  type="checkbox"
                  // className="form-check-input"
                  id="check"
                />
                <span className="loginerrmsg">{errmsg}</span>
              </div>

              {/* terms and conditions */}
              <p className="agreement">Agree terms and condtions</p>

              {/* registe and create a amazon account */}
              <p style={{ textAlign: "center", marginLeft: "55px" }}>
                New User?{" "}
                <mark style={{ color: "red" }}>Click here to Register</mark>
              </p>
              <Link to="/Register">
                <button
                  type="button"
                  className="btn btn-secondary "
                  style={{
                    width: "200px",
                    textAlign: "center",
                    marginLeft: "70px",
                    padding: "5px",
                  }}
                  // register or new login page
                  // onClick={register}
                >
                  Create_Account
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
