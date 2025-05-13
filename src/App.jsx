import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
import Home from '../src/pages/Home';
import About from '../src/components/AboutUs/About'; 
import Course from '../src/components/Course/Course'; 
import Header1 from './components/Header/Header1.jsx';
import Header2 from './components/Header/Header2.jsx';
import Footer from '../src/components/Footer/Footer';
import Blog from "../src/components/Blog/Blog";
import Notes from "../src/components/Notes/Notes";
import Tutorial from "../src/components/Tutorial/Tutorial";
import Contact from "../src/components/ContactUS/Contact.jsx";
import WorkWithUs from "../src/components/WorkWithUs/Workwithus.jsx";
import Login from "../src/components/Login/Login.jsx";
import Signup from "../src/components/Signup/Signup.jsx";
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Course2 from  "../src/components/Course/Course2.jsx";



function App() {
  const [ok, setOk] = useState(() => {
    return localStorage.getItem("ok") === "true";
  });

  useEffect(() => {
    localStorage.setItem("ok", ok.toString());
  }, [ok]);

  return (
    <>
      {ok ? <Header2 ok={ok} setOk={setOk}/> : <Header1 />}
      <Routes>
        <Route path="/" element={<Home ok={ok}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course ok={ok}/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/notes" element={<Notes ok={ok}/>} />
        <Route path="/tutorial" element={<Tutorial ok={ok}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workwithus" element={<WorkWithUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login ok={ok} setOk={setOk} />} />
        <Route path="/dashboard" element={<Dashboard ok={ok} setOk={setOk} />} />
        <Route path="/course2" element={<Course2 />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
