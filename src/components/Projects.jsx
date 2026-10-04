import {
  FiExternalLink,
  FiGithub,
  FiArrowUpRight,
} from "react-icons/fi";

function Projects() {
  const projects = [
    {
      number: "01",
      featured: true,
      title: "EduCoreAI",
      subtitle: "AI-Powered Student–Mentor Platform",
      description:
        "An intelligent student support platform designed to provide personalized academic, career and behavioral guidance through AI-powered insights, mentor interaction and student analytics.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "AI",
        "Agentic AI",
      ],
      features: [
        "Academic Risk Prediction",
        "AI Personalization",
        "Mentor Matching",
        "Career & Placement Support",
        "Student Analytics",
      ],
      github: "https://github.com/codebysoujanya/EduCoreAI",
    },

    {
      number: "02",
      title: "ResearchHub",
      subtitle: "Research Paper Analysis Platform",
      description:
        "A web-based platform concept for organizing and analyzing research papers with an interactive dashboard and data visualization.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Chart.js",
      ],
      features: [
        "Research Paper Dashboard",
        "Data Visualization",
        "Paper Analysis",
      ],
      github: "https://github.com/codebysoujanya",
    },

    {
      number: "03",
      title: "Crop Plantation",
      subtitle: "Agricultural Web Application",
      description:
        "A web application designed to help users explore agricultural products and manage crop-related information through a user-friendly interface.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
      ],
      features: [
        "Product Catalogue",
        "Shopping Cart",
        "Agricultural Information",
      ],
      github: "https://github.com/codebysoujanya",
    },

    {
      number: "04",
      title: "Online Student Monitoring System",
      subtitle: "Student Performance Management",
      description:
        "A student monitoring solution designed to organize academic information and support easier tracking of student performance.",
      technologies: [
        "Web Development",
        "Database",
        "JavaScript",
      ],
      features: [
        "Student Records",
        "Performance Tracking",
        "Information Management",
      ],
      github: "https://github.com/codebysoujanya",
    },
  ];

  return (
    <section className="section projects-section" id="projects">

      <div className="container">

        <div className="section-heading">

          <span className="section-number">
            03
          </span>

          <div>
            <p className="section-label">
              SELECTED WORK
            </p>

            <h2>
              Projects that
              <span> solve problems.</span>
            </h2>
          </div>

        </div>

        <p className="section-description">
          A selection of academic and personal projects where I
          applied software development, data and AI concepts to
          build practical solutions.
        </p>

        <div className="projects-container">

          {projects.map((project) => (

            <article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.number}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FiGithub />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} project`}
                  >
                    <FiExternalLink />
                  </a>

                </div>

              </div>

              <div className="project-content">

                <p className="project-subtitle">
                  {project.subtitle}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-features">

                  {project.features.map((feature) => (
                    <span key={feature}>
                      ✓ {feature}
                    </span>
                  ))}

                </div>

                <div className="project-tech">

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

              {project.featured && (
                <div className="featured-label">
                  Featured Project
                  <FiArrowUpRight />
                </div>
              )}

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;