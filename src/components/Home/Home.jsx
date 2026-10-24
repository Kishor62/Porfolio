import  { useEffect, useState } from "react";
import { Link } from "react-scroll";
import myphoto from "../../assets/images/my.jpg";
import "./Home.css";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section id="home" className={`home-section ${isVisible ? "visible" : ""}`}>
      <div className="home-container">
        
        {/* Left Content */}
        <div className="home-left">
          <p className="greeting">Hello, I'm</p>
          
          <h1 className="name">
            Kishor <span>Kumar</span>
          </h1>
          
          <h2 className="role">Frontend Developer</h2>
          
          <p className="description">
            I build responsive and user-friendly web applications 
            using modern technologies.
          </p>

          <div className="home-buttons">
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <button className="btn-primary">Hire Me</button>
            </Link>
            
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <button className="btn-secondary">View Projects</button>
            </Link>
          </div>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="home-right">
          <div className="image-wrapper">
            <img 
              src={myphoto}   // ← apni photo ka path daalo
              alt="Kishor Kumar" 
            />
            <div className="glow"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;