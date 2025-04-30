import React from "react";
import "./Workwithus.css";

const WorkWithUs = () => {
    return (
<>
<div className="wmain">
<div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">We Are Hiring!</h5>
    <p className="card-text">We are looking for freelance Developers, Subtitle writers, Content writers and Video editors. If you think you are fit for the role. Submit the form. Make sure you have a valid email so we can contact you back in case your application gets selected. Cheers!</p>
  </div>
</div>
<form className="workForm">
<div className="mb-3">
    <label for="exampleInputName1" className="form-label">Full Name</label>
    <input type="text" placeholder="Enter Name"className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" placeholder="Enter Email"id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-label">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPhone1" className="form-label">Phone No</label>
    <input type="text" placeholder="Enter Phone No"className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputReaume1" className="form-label">Link of your Resume</label>
    <input type="text" className="form-control"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-label" for="exampleCheck1"> I'm not a robot</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <button type="#" className="btn btn-primary">Reset</button>
</form>
</div>

</>
    )
};
export default WorkWithUs;