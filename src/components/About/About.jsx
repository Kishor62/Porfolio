import React from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="about" id="about">
      {/* Heading */}
      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p>PERSONAL DETAILS</p>
        <h1>
          About <span>Me</span>
        </h1>
      </motion.div>

      <div className="about-container">
        {/* LEFT TIMELINE */}
        <motion.div
          className="timeline"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Personal Info */}
          <motion.div className="timeline-item" variants={item}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h2>Personal Info</h2>

              <p>
                <strong>Name:</strong> Kishor Kumar
              </p>

              <p>
                <strong>Role:</strong> Frontend Developer
              </p>

              <p>
                <strong>Current Location:</strong> Noida sector-16, India
              </p>

              <p>
                <strong>Email:</strong> kishorsharma99735@gmail.com
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div className="timeline-item" variants={item}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h2>Education</h2>

              <div className="education-item">
                <h3>BCA</h3>
                <p>
                  <strong>University:</strong> Maulana Mazharul Haque
                  University, Patna
                </p>
                <p>
                  <strong>Status:</strong> Completed
                </p>
              </div>

              <div className="education-item">
                <h3>12th</h3>
                <p>
                  <strong>Board:</strong> BSEB, Patna
                </p>
                <p>
                  <strong>Percentage:</strong> 60%
                </p>
              </div>

              <div className="education-item">
                <h3>10th</h3>
                <p>
                  <strong>Board:</strong> BSEB, Patna
                </p>
                <p>
                  <strong>Percentage:</strong> 63%
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div className="timeline-item" variants={item}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h2>Skills</h2>

              <p>HTML5 • CSS3 • JavaScript (ES6+)</p>
              <p>React.js • Tailwind CSS</p>
              <p>Context API • Redux Toolkit</p>
              <p>Responsive Web Design • UI Development</p>
              <p>Frontend Deployment: Vercel</p>
              <p>Backend Deployment: Render</p>
              <p>Tools: Git • GitHub • Visual Studio Code</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          className="about-cards"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="about-card"
            variants={item}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 220, 255, 0.4)",
            }}
          >
            <span>01</span>
            <h3>Frontend Developer</h3>
            <p>
              Creating modern and responsive websites using React and modern
              CSS.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            variants={item}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 220, 255, 0.4)",
            }}
          >
            <span>02</span>
            <h3>React Developer</h3>
            <p>
              Building interactive user interfaces with reusable React
              components.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            variants={item}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 220, 255, 0.4)",
            }}
          >
            <span>03</span>
            <h3>Problem Solver</h3>
            <p>
              Learning new technologies and solving real-world development
              problems.
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            variants={item}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 220, 255, 0.4)",
            }}
          >
            <span>04</span>
            <h3>Always Learning</h3>
            <p>Improving my skills and exploring new technologies every day.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
