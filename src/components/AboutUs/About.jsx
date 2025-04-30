import React from "react";
import "../AboutUs/About.css"; 

import Dina from "../../assets/AboutUs/dinabandhu.jpg";
import Omkar from "../../assets/AboutUs/omkar.jpg";
import Ayush from "../../assets/AboutUs/ayush.jpg";
import Nitesh from "../../assets/AboutUs/image.jpg";
import Rakshak from "../../assets/AboutUs/rakshak.jpg";


const About = () =>{
    return (
        <>
      <div className="aboutMain">
      <div className="card text-center border-primary mb-5 ">
        <div className="card-header">
            ABOUT US
        </div>
        <div className="card-body">
            <h5 className="card-title">What We Provide?</h5>
            <p className="card-text">We aim to expand our resource library and introduce more interactive learning
                experiences to empower tech enthusiasts worldwideWe provide insightful tech guides, in-depth articles,
                curated course links, and more—all designed to support your journey in the tech world.Our team is made
                up of passionate tech enthusiasts who bring unique skills and experiences, covering fields like software
                development, AI, data science, and more.
                We’re here to simplify the path to tech mastery. Our mission is to make high-quality, accessible
                resources available to everyone who wants to deepen their tech knowledge.
                Provides a clear next step for engagement, inviting users to explore or participate.
                Join Us on this Journey!
            </p>
            <a href="#" className="btn btn-primary">Learn More</a>
        </div>
    </div>

     
    <div className="card mb-3 border-primary" style={{width: "850px"}}>
      <div className="row no-gutters">
          <div className="col-md-4">
              <img src="https://cdn.create.vista.com/api/media/small/162783414/stock-photo-businessman-pointing-with-finger"
                  className="card-img" alt="..."/>
          </div>
          <div className="col-md-8 border-primary">
              <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text">

                      Our team is made up of passionate tech enthusiasts who bring unique skills and experiences,
                      covering fields like software development, AI, data science, and more.
                      Provides a clear next step for engagement, inviting users to explore or participate
                  </p>
            
              </div>
          </div>
      </div>
  </div>

        <div className="card text-center border-primary mb-5">
    <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
                <a className="nav-link active" href="#">Active</a>
            </li>
        </ul>
    </div>
    <div className="card-body ">
        <h5 className="card-title">Our Focus Areas</h5>
        <p className="card-text">Our purpose is to empower individuals at every stage of their tech journey by providing
            high-quality, accessible resources that simplify complex topics. In today’s rapidly evolving
            technological landscape, staying updated and continuously learning is crucial, whether you're a beginner
            taking your first steps into coding, a student delving into data science, or a seasoned professional
            exploring the latest advancements in AI. Here, users can find a well-curated selection of tech
            guides, in-depth articles, and links to courses tailored to meet diverse learning needs. Our goal is not
            only to provide information but to inspire curiosity and foster an environment where anyone can develop
            a solid foundation in technology and explore new areas confidently. We believe that learning tech skills shouldn’t feel overwhelming
            or inaccessible, so we’ve built a platform that combines expert insights, practical resources, and
            hands-on guidance to make learning engaging and achievable. From beginners to advanced learners, we
            curate resources that cater to every level, covering key areas like software development, data analysis,
            AI, and emerging technologies. Our articles break down complex topics, our tech guides offer practical
            steps, and our curated course links provide a pathway for deeper exploration. By focusing on clarity,
            relevancy, and ease of access, we aim to help users not just learn but gain confidence in their skills.
            Ultimately, we want this platform to be a space where people can continuously grow, connect with a
            broader tech community, and keep pace with a fast-evolving industry.
        </p>
        <a href="#" className="btn btn-primary">Learn more</a>
    </div>
</div>



    <div className="header">
        <h3>Our Team</h3>
    </div>   
         
<div className="language">
{/* // style={{ color: "var(--text-color)", borderBottom: "1px solid var(--text-color)" }} */}
    <div className="card" style={{width: "14rem"}}>
        <div className="card-body">
            <div className="card-img">
                <img src={Nitesh} alt="..."/>
            </div>
          <div className="card-text">
            <h5 className="card-title">Nitesh Kumar</h5>
          <h6 className="card-subtitle mb-2 ">Team member</h6>
         <div className="icon">
            <a href="https://www.instagram.com/nitesh_kumawat_029/"><i className="fa-brands fa-square-instagram"></i></a>
            <a href="https://github.com/Nitesh780"><i className="fa-brands fa-square-github"></i></a>
         </div>
        
          </div>
        </div>
    </div>
    <div className="card" style={{width: "14rem"}}>
        <div className="card-body">
            <div className="card-img">
                <img src={Ayush} alt="..."/>
            </div>
          <div className="card-text">
            <h5 className="card-title">Ayush Verma</h5>
          <h6 className="card-subtitle mb-2 ">Team leader</h6>
          <div className="icon">
            <a href="https://www.instagram.com/_ayushverma_/profilecard/?igsh=YmM5MGV3Y3EzYmoy"><i className="fa-brands fa-square-instagram"></i></a>
          <a href="https://github.com/Ayush001verma"><i className="fa-brands fa-square-github"></i></a>
          </div>
          </div>
        </div>
    </div>   
    <div className="card" style={{width: "14rem"}}>
                <div className="card-body">
                    <div className="card-img">
                        <img src={Omkar} alt="..."/>
                    </div>
                  <div className="card-text">
                    <h5 className="card-title">Omkar Gaddi</h5>
                  <h6 className="card-subtitle mb-2 ">Team member</h6>
                 <div className="icon">
                    <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                    <a href="https://github.com/Omkargaddi"><i className="fa-brands fa-square-github"></i></a>
                 </div>
                
                  </div>
                </div>
            </div>

          </div>

          <div className="language">

           
            <div className="card" style={{width: "14rem"}}>
                <div className="card-body">
                    <div className="card-img">
                        <img src={Rakshak} alt="..."/>
                    </div>
                  <div className="card-text">
                    <h5 className="card-title">Rakshak.B</h5>
                  <h6 className="card-subtitle mb-2 ">Team member</h6>
                  <div className="icon">
                    <a href="https://www.instagram.com/_mr_krish__324/"><i className="fa-brands fa-square-instagram"></i></a>
                  <a href="https://github.com/rakshakrb"><i className="fa-brands fa-square-github"></i></a>
                  </div>
                  </div>
                </div>
            </div>
            <div className="card" style={{width: "14rem"}}>
                <div className="card-body">
                    <div className="card-img">
                        <img src={Dina} alt="..."/>
                    </div>
                  <div className="card-text">
                    <h5 className="card-title">Dinabanhu</h5>
                  <h6 className="card-subtitle mb-2 ">Team member</h6>
                 <div className="icon">
                    <a href="https://www.instagram.com/dinabandhuchatar?igsh=c3JyYm0wa2FoYWtm"><i className="fa-brands fa-square-instagram"></i></a>
                    <a href="https://github.com/Dinabandhu-07"><i className="fa-brands fa-square-github"></i></a>
                 </div>
                  </div>
                </div>     
            </div>
                  
                  </div>
             
      </div>
        </>
    );
}
export default About;