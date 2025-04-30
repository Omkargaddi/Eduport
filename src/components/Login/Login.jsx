import React from "react";
import "./Login.css";
import Logo from "../../assets/Login/Designer8.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <div className="title">
              <img src={Logo} alt="..." />
              <header>Eduport</header>
            </div>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Forgot password?
                </a>
              </div>

              <div className="field button-field">
                <button>Login</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <NavLink to="/signup" className="link signup-link">
                  Signup
                </NavLink>
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
    </>
  );
};
export default Login;
