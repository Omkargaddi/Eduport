import React from "react";
import "../Login/Login.css";
import Logo from "../../assets/Login/Designer8.png";
import { NavLink } from "react-router-dom";

const Signup = () => {
    return (
        <>
        <section className="container forms">
        <div className="form signup">
      <div className="form-content">
        <div className="title">
          <img src={Logo} alt="..."/>
        <header>Eduport</header>
        </div>
        <form action="#">
          <div className="field input-field">
            <input type="email" placeholder="Email" className="input"/>
          </div>

          <div className="field input-field">
            <input type="password" placeholder="Create password" className="password"/>
          </div>

          <div className="field input-field">
            <input type="password" placeholder="Confirm password" className="password"/>
            <i className='bx bx-hide eye-icon'></i>
          </div>

          <div className="field button-field">
            <button>Signup</button>
          </div>
        </form>

        <div className="form-link">
          <span>Already have an account? <NavLink to="/login" className="link signup-link">Login</NavLink></span>
        </div>
      </div>

      <div className="line"></div>

      <div className="media-options">
        <a href="#" className="field facebook">
          <i className='bx bxl-facebook facebook-icon'></i>
          <span>Login with Facebook</span>
        </a>
      </div>

      <div className="media-options">
        <a href="#" className="field google">
          <img src="images/google.png" alt="Google" className="google-img"/>
          <span id="google">Login with Google</span>
        </a>
      </div>

    </div>
    </section>
        </>
    )
};
export default Signup;