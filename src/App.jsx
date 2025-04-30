import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/Home';
import About from '../src/components/AboutUs/About'; 
import Course from '../src/components/Course/Course'; 
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Blog from "../src/components/Blog/Blog";
import Notes from "../src/components/Notes/Notes";
import Tutorial from "../src/components/Tutorial/Tutorial";
import Dashboard from "../src/components/Dashboard/Dashboard.jsx"; 
import Contact from "../src/components/ContactUS/Contact.jsx";
import WorkWithUs from "../src/components/WorkWithUs/Workwithus.jsx";
import Login from "../src/components/Login/Login.jsx";
import Signup from "../src/components/Signup/Signup.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workwithus" element={<WorkWithUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;
