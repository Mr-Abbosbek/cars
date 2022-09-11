import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { service } from "../../service/axios.service";
import { AuthContext } from "../../context";

function Login() {
  const { setIsAuth } = useContext(AuthContext);
  const [login, setLogin] = useState({
    phoneNumber: "",
    password: "",
  });

  const handlerSignIn = (newDate) => (e) => {
    setLogin({ ...login, [newDate]: e.target.value });
  };

  const [register, setRegister] = useState({
    fullName: "",
    phoneNumber: "",
    password: "",
    roleId: "",
  });

  const handlerSignUp = (n) => (e) => {
    setRegister({ ...register, [n]: e.target.value });
  };

  const LoginHandler = (e) => {
    e.preventDefault();
    try {
      service.post("/employee/login", login).then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/modellar";
        setIsAuth(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const signUpButton = () => {
    document.getElementById("contain").classList.add("right-panel-active");
  };
  const signInButton = () => {
    document.getElementById("contain").classList.remove("right-panel-active");
  };

  return (
    <div className="body_login">
      <div className="contain" id="contain">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Full name"
              name="Name"
              onChange={handlerSignUp("fullName")}
            />
            <input
              type="password"
              placeholder="Password"
              name="Password"
              autoComplete="on"
              onChange={handlerSignUp("password")}
            />
            <input
              type="text"
              placeholder="Role Id"
              name="Role"
              onChange={handlerSignUp("roleId")}
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <input
              id="phone"
              type="text"
              name="phone"
              value={login.phoneNumber}
              placeholder="Phone Number"
              onChange={handlerSignIn("phoneNumber")}
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="true"
              value={login.password}
              onChange={handlerSignIn("password")}
            />
            <Link to="/">Forgot your password?</Link>
            <button type="button" onClick={LoginHandler}>
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={signInButton}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={signUpButton}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
