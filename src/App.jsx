import React from "react";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
function App() {
  return (
    <div>
      <Nav/>
      <Home />
      <About/>
      <Project/>
    </div>
  );
}

export default App;
