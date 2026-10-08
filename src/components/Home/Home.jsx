
import React from "react";
import { Link } from "react-scroll";
import myphoto from "../../assets/images/my.jpg"
import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">

        <div className="home-text">
          <p className="hello">Hello, I'm</p>

          <h1>
            Kishor <span>Kumar</span>
          </h1>

          <h2>Frontend Developer</h2>

          <p className="description">
            I build responsive and user-friendly web applications
            using modern technologies.
          </p>

          <div className="home-buttons">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn primary-btn"
            >
              Hire Me
            </Link>

            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn outline-btn"
            >
              View Projects
            </Link>
          </div>

          <div className="social-icons">
            <a href="#" aria-label="GitHub">
              GitHub
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="YouTube">
              YouTube
            </a>
          </div>
        </div>

        <div className="home-image">
          <div className="image-circle"></div>

          <img
            src={myphoto}
            alt="Kishor kumar"
          />
        </div>

      </div>
    </section>
  );
}

export default Home;
