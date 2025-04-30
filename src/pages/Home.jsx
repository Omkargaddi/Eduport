import React from "react";
import Backgroundimg from "../assets/home/homebackground3.png";
import Cexe from "../assets//home/C-Exercises.webp";
import oops from "../assets/home/oops.jpg";
import pyp from "../assets/home/py-problems.jpg";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="sub-container">
          <div className="cnt1">
            <div className="head1">
              <div id="head1">Welcome To</div>
              <ul>
                <li>
                  <span id="head2">EduPort</span>
                </li>
              </ul>
            </div>

            <div className="wrapper">
              <h4>Start your Coding Journey</h4>
            </div>
            <p>
              Confused on which course to take? I have got you covered. Browse
              courses and find out the best course for you. Its free! Code With
              Harry is my attempt to teach basics and those coding techniques to
              people in short time which took me ages to learn.
            </p>
            <NavLink
              className="btn btn-primary mr-2"
              to="/course"
              role="button"
            >
              Free Course
            </NavLink>
            <NavLink className="btn btn-primary" to="/blog" role="button">
              Explore Blog
            </NavLink>
          </div>
          <div className="cnt2">
            <img src={Backgroundimg} alt="img" />
          </div>
        </div>

        <div className="home-heading">
          <h3>Recommended Courses</h3>
        </div>
        <div className="submain-container">
          <div className="card" style={{ width: "18rem", border: " none" }}>
            <img src={Cexe} className="card-img-top" alt="img" />
            <div className="card-body">
              <h5 className="card-title">C Language Pratice Problems</h5>
              <p className="card-text">
                {" "}
                This series contains programs for you to practice C Programming
                and related concepts. It has videos that will provide you with a
                proper explanation of the program and its logic.
              </p>
              <a href="#" className="btn btn-primary">
                Start Watching
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", border: " none" }}>
            <img src={oops} className="card-img-top" alt="img" />
            <div className="card-body">
              <h5 className="card-title">OOPS Using Python Programming</h5>
              <p className="card-text">
                {" "}
                If you don't know about Object Oriented Programming (OOP)
                Paradigm, then this course is for you. In this you'll learn
                about objects, classes and much more in Python language.
              </p>
              <a href="#" className="btn btn-primary">
                Start Watching
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", border: " none" }}>
            <img src={pyp} className="card-img-top" alt="img" />
            <div className="card-body">
              <h5 className="card-title">Basic Python Programs With Code</h5>
              <p className="card-text">
                {" "}
                This series contains basic Python programs. It's a concise and
                precise course, so if you have a couple of minutes or an hour,
                just get started. This course will surely add some value.
              </p>
              <a href="#" className="btn btn-primary">
                Start Watching
              </a>
            </div>
          </div>
        </div>

        <div className="home-heading">
          <h3>Testimonials</h3>
        </div>

        <div className="testi-container">
          <div className="testi">
            <div className="icon1">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p>
              I don't have words to thank this man, I'm really grateful to have
              this channel and website in my daily routine. If you're a mere
              beginner, then you can trust this guy and can put your time into
              his content. I can assure you that it'll be worth it.
            </p>
            <h5>Mohit Kumar</h5>
            <h6>Web Developer</h6>
          </div>

          <div className="testi">
            <div className="icon1">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p>
              For everyone who wants to level up their #Coding and #Dev skills -
              seriously, this channel is for you! Both basic and advanced stacks
              are covered on this channel, and one can learn according to his
              skill levels. And the icing on the cake is, everything is
              available for free.
            </p>
            <h5>Rakesh Shetty</h5>
            <h6>Web Developer</h6>
          </div>
        </div>
      </div>

      <a href="#" className="to-top">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Home;
