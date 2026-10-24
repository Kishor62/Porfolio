import React from "react";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Certifications from "./components/Certification/Certification";
function App() {
  return (
    <div>
      <Nav/>
      <Home />
      <About/>
      <Project/>
      <Certifications/>
      <Contact/>
    </div>
  );
}

export default App;
