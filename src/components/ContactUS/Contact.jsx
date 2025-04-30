import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="head">
        <h3>How would you like to contact us?</h3>
      </div>
      <div className="main-cnt">
        <div className="card5">
          <div className="card-body">
            <h5 className="card-title">Request a call</h5>
            <p className="card-text">
              Give us some info so right person can get you back.
            </p>

            <div className="input-group">
              <span className="input-group-text">First and last name</span>
              <input
                type="text"
                aria-label="First name"
                className="form-control"
              />
              <input
                type="text"
                aria-label="Last name"
                className="form-control"
              />
            </div>
            <div className="input-group ">
              <span className="input-group-text">Profession</span>
              <input
                type="text"
                className="form-control"
                aria-label="Dollar amount (with dot and two decimal places)"
              />
            </div>

            <div className="input-group ">
              <span className="input-group-text">Email</span>
              <input type="text" className="form-control" />
            </div>

            <div className="input-group ">
              <span className="input-group-text">Phone</span>
              <input type="text" className="form-control" />
            </div>

            <select className="form-select" aria-label="Default select example">
              <option selected>Country / Region</option>
              <option value="1">USA</option>
              <option value="2">India</option>
              <option value="3">Brazil</option>
              <option value="4">Italy</option>
              <option value="5">Sri lanka</option>
              <option value="6">South Africa</option>
              <option value="7">Australia</option>
              <option value="8">England</option>
            </select>

            <div className=" form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label
                className="form-check-label"
                for="exampleCheck1"
                id="checkbox"
              >
                By registring, you agree to the processing of your personal data
                by EduPort as Described in the Privacy Statement
              </label>
            </div>

            <a href="#" className="btn btn-primary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="sub-cnt">
          <div className="card5">
            <div className="card-body">
              <h5 className="card-title">Give us a call.</h5>
              <h5 className="card-title">1-800-664-9073</h5>
              <div className="link">
                <a href="#" className="card-link">
                  Not in the US? Find your local office
                </a>
                <a href="#" className="card-link">
                  Get biling and tech support
                </a>
              </div>
            </div>
          </div>

          <div className="card5">
            <div className="card-body">
              <h5 className="card-title">Chat with us</h5>
              <p className="card-text">
                Get membership info, login help, and live chat with an agent.
              </p>
              <a href="#" className="btn btn-primary">
                Let's Chat
              </a>
            </div>
          </div>

          <div className="card5">
            <div className="card-body">
              <h5 className="card-title">Leave us some feeback.</h5>
              <p className="card-text">Good or bad, we love to hear it all.</p>
              <a href="#" className="btn btn-primary">
                Send feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
