import React,{ useState } from "react";
import axios from "axios";
import "../Login/Login.css";
import Logo from "../../assets/Login/Designer8.png";
import { NavLink } from "react-router-dom";
import { ToastContainer,toast,Bounce } from 'react-toastify';



const Signup = () => {

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
});

const handleChange = (e) => {
  setRegister({
    ...register,
    [e.target.name]:e.target.value
  })

}

const reset = () => {
  setRegister({
    name: "",
    email: "",
    password: "",
  });
}

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(register);

  try {
    const response = await axios.post('http://localhost:8082/signup', register);
    console.log(response.data);
    toast.success("User added successfully. User Can login now", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    
  } catch (error) {
    if (error.response) {
      reset();
      if (error.response.status === 401) {
        toast.error("Unauthorized access. Please check your credentials.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else if (error.response.status === 409) {
        toast.error("User already registered with this email. Can login", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        toast.error(`Signup failed: ${error.response.data || "Unknown error"}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } else {
      console.error("Error:", error);
      toast.error("Could not connect to server.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }
};



    return (
        <>
        <section className="container forms">
        <div className="form signup">
      <div className="form-content">
        <div className="title">
          <img src={Logo} alt="..."/>
        <header>Eduport</header>
        </div>
        <form onSubmit={handleSubmit}>

        <div className="field input-field">
            <input type="text" placeholder="Enter name" name="name" value={register.name} onChange={handleChange} required/>
          </div>
          <div className="field input-field">
            <input type="email" placeholder="Email"  name="email"value={register.email} onChange={handleChange} required/>
          </div>

          <div className="field input-field">
            <input type="password" placeholder="Enter password" name="password" value={register.password} onChange={handleChange} required/>
            <i className='bx bx-hide eye-icon'></i>
          </div>

          <div className="field button-field">
            <button  type="submit"> Signup</button>
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
    <ToastContainer />
        </>
    )
};
export default Signup;
