import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import Logo from "../../assets/Login/Designer8.png";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Login = ({ ok, setOk }) => {
  const [password, setPasswordValue] = useState("");
  const [userId, setUserIdValue] = useState("");
  const navigate = useNavigate();

  const setPassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const setUserId = (e) => {
    setUserIdValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this is our data " + userId + "   " + password);

    const data = { userId, password };

    try {
      const response = await axios.post("http://localhost:8082/login", data);
      console.log("Login response: ", response.data);

      if (response.data === true) {
        setOk(true);
        localStorage.setItem("ok", "true");
        navigate("/");
      } else {
        toast.error("Invalid User ID or Password", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Could not connect to server.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <div className="title">
              <img src={Logo} alt="..." />
              <header>Eduport</header>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Email"
                  value={userId}
                  onChange={setUserId}
                  required
                />
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={setPassword}
                  required
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="form-link">
                <a href="#" className="forgot-pass">Forgot password?</a>
              </div>

              <div className="field button-field">
                <button type="submit">Login</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <NavLink to="/signup" className="link signup-link">Signup</NavLink>
              </span>
            </div>
          </div>

          <div className="line"></div>

          <div className="media-options">
            <a href="#" className="field facebook">
              <i className="bx bxl-facebook facebook-icon"></i>
              <span>Login with Facebook</span>
            </a>
          </div>

          <div className="media-options">
            <a href="#" className="field google">
              <img src="images/google.png" alt="..." className="google-img" />
              <span id="google">Login with Google</span>
            </a>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
