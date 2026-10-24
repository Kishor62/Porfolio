
import { useState } from "react";
import todo from "../../assets/images/Todo-app.png";
import portfolio from "../../assets/images/Portfolio.png";
import shopmart from "../../assets/images/ShopMart-E.png";
import "./Project.css";

const projectData = [
  {
    id: 1,
    title: "Todo App - Full MERN Stack",
    category: "Task Management",
    description:
      "Full-stack Todo Application using MERN Stack (MongoDB, Express, React, Node.js). Includes user authentication, CRUD operations, task filtering, and responsive design. Data is securely stored in MongoDB with real-time UI updates.",
    image: todo,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    color: "purple",
    live: "https://todo-app-mg2h.vercel.app/",
    github: "https://github.com/Kishor62/Todo-app",
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web Site",
    description:
      "Modern personal portfolio website built with React. Features smooth animations, dark theme, responsive design and project showcase.",
    image: portfolio,
    tech: ["React.js", "CSS3", "JavaScript"],
    color: "blue",
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "ShopMart - E-commerce Website",
    category: "E-commerce",
    description:
      "Modern and responsive e-commerce website built with React.js. Features product browsing, shopping cart management, category-based filtering, seamless navigation, and responsive UI. Uses Context API, React Router, Redux Toolkit, and Tailwind CSS.",
    image: shopmart,
    tech: [
      "React.js",
      "JavaScript",
      "Context API",
      "React Router",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    color: "green",
    live: "https://shopmart-e-commerce-liart.vercel.app/",
    github: "https://github.com/Kishor62/Shopmart-E-commerce.git",
  },
];

const categories = [
  "All",
  "Web Site",
  "Task Management",
  "Javascript",
  "React.js",
  "E-commerce",
];

function Project() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectData.filter((project) => {
    if (activeCategory === "All") return true;

    if (activeCategory === "Javascript") {
      return project.tech.some(
        (tech) => tech.toLowerCase() === "javascript"
      );
    }

    if (activeCategory === "React.js") {
      return project.tech.some((tech) =>
        ["react", "react.js"].includes(tech.toLowerCase())
      );
    }

    return project.category === activeCategory;
  });

  return (
    <section className="project-page" id="projects">
      <div className="project-bg-circle circle-one"></div>
      <div className="project-bg-circle circle-two"></div>

      <div className="project-hero">
        <div className="floating-icon code-icon">&lt;/&gt;</div>
        <div className="floating-icon js-icon">JS</div>
        <div className="floating-icon react-icon">⚛</div>

        <p className="project-subtitle">MY WORK</p>

        <h1>
          My <span>Projects</span>
        </h1>

        <p className="project-hero-text">
          Here are some of the projects I have built. Each project reflects my
          skills, creativity and passion for development.
        </p>
      </div>

      <div className="project-container">
        <div className="project-heading">
          <div>
            <p className="project-label">MY PORTFOLIO</p>
            <h2>
              Featured Projects<span>.</span>
            </h2>
          </div>

          <div className="project-total">
            {String(filteredProjects.length).padStart(2, "0")}
            <small> Projects</small>
          </div>
        </div>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "project-filter selected"
                  : "project-filter"
              }
              onClick={() => setActiveCategory(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <article
              className="project-card"
              key={project.id}
              style={{ "--card-delay": `${index * 100}ms` }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <span className={`project-badge ${project.color}`}>
                  {project.category}
                </span>

                <a
                  href={project.live}
                  className="project-external"
                  aria-label={`Open ${project.title}`}
                  target={project.live !== "#" ? "_blank" : undefined}
                  rel={project.live !== "#" ? "noreferrer" : undefined}
                >
                  ↗
                </a>
              </div>

              <div className="project-card-content">
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.live}
                    className="project-demo"
                    target={project.live !== "#" ? "_blank" : undefined}
                    rel={project.live !== "#" ? "noreferrer" : undefined}
                    onClick={(e) => {
                      if (project.live === "#") e.preventDefault();
                    }}
                  >
                    Live Demo <span>↗</span>
                  </a>

                  <a
                    href={project.github}
                    className="project-github"
                    target={project.github !== "#" ? "_blank" : undefined}
                    rel={project.github !== "#" ? "noreferrer" : undefined}
                    onClick={(e) => {
                      if (project.github === "#") e.preventDefault();
                    }}
                  >
                    <span>⌘</span> View Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <footer className="project-footer">
        <p>
          Designed with <span>♥</span> by <strong>Kishor Kumar</strong>
        </p>

        <a href="mailto:your@email.com">Let's Connect ↗</a>
      </footer>
    </section>
  );
}

export default Project;
