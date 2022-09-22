import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { service } from "../../service/axios.service";
import { AuthContext } from "../../context";

function Login() {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);
  const [login, setLogin] = useState({
    phoneNumber: "+998993466780",
    password: "student",
  });
  const [message, setMessage] = useState("");

  const handlerSignIn = (newDate) => (e) => {
    setLogin({ ...login, [newDate]: e.target.value });
  };

  const LoginHandler = (e) => {
    e.preventDefault();
    try {
      service
        .post("/employee/login", login)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", res.data.fullName);
          navigate("/adminpanel");
          setIsAuth(false);
        })
        .catch((error) => {
          setMessage(error.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="body_login">
      <div className="contain" id="contain">
        <div className="form-container sign-in-container w-100">
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
            <p
              className={message ? "d-block m-0 text-danger fw-bold" : "d-none"}
            >
              {message}
            </p>
            <Link to="/login">Forgot your password?</Link>
            <button type="button" onClick={LoginHandler}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
