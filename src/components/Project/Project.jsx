
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Project.css";

function Project() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "To-Do List App",
      category: "JavaScript",
      image: "/projects/todo.png",
      description:
        "A simple and responsive To-Do List application built with HTML, CSS and JavaScript.",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Weather App",
      category: "React",
      image: "/projects/weather.png",
      description:
        "A real-time weather application using React and OpenWeather API.",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "React",
      image: "/projects/portfolio.png",
      description:
        "A personal portfolio website with smooth scrolling, animations and responsive design.",
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "E-Commerce Website",
      category: "HTML & CSS",
      image: "/projects/ecommerce.png",
      description:
        "A modern e-commerce website UI with cart, product listing and responsive design.",
      github: "#",
      live: "#",
    },
    {
      id: 5,
      title: "Calculator App",
      category: "JavaScript",
      image: "/projects/calculator.png",
      description:
        "A functional calculator with modern UI and smooth animations.",
      github: "#",
      live: "#",
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "React",
      image: "/projects/food.png",
      description:
        "A food delivery application with menu, cart and order tracking features.",
      github: "#",
      live: "#",
    },
  ];

  const categories = [
    "All",
    "React",
    "JavaScript",
    "HTML & CSS",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="projects" id="projects">

      {/* Heading */}
      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p>MY WORK</p>

        <h1>
          My <span>Projects</span>
        </h1>

        <div className="heading-line"></div>

        <h3>
          Here are some of my recent projects. Each project helps me
          learn and improve my skills in web development.
        </h3>
      </motion.div>

      {/* Filter */}
      <motion.div
        className="project-filter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={filter === category ? "filter-active" : ""}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects */}
      <motion.div
        className="project-grid"
        layout
      >
        <AnimatePresence mode="popLayout">

          {filteredProjects.map((project) => (
            <motion.div
              className="project-card"
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              whileHover={{
                y: -10,
              }}
            >

              {/* Image */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="image-overlay">
                  <a href={project.live}>
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="project-bottom">

                  <a
                    href={project.live}
                    className="view-project"
                  >
                    View Project →
                  </a>

                  <div className="project-links">

                    <a
                      href={project.github}
                      title="GitHub"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      title="Live Demo"
                    >
                      ↗
                    </a>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </AnimatePresence>
      </motion.div>

      {/* Bottom Button */}
      <motion.div
        className="more-projects"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span></span>

        <button>
          View More Projects →
        </button>

        <span></span>
      </motion.div>

    </section>
  );
}

export default Project;

