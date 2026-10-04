import {
  FiBriefcase,
  FiCheckCircle,
} from "react-icons/fi";

function Experience() {
  return (
    <section className="section experience-section" id="experience">

      <div className="container">

        <div className="section-heading">

          <span className="section-number">
            04
          </span>

          <div>
            <p className="section-label">
              EXPERIENCE
            </p>

            <h2>
              Where I've gained
              <span> industry exposure.</span>
            </h2>
          </div>

        </div>

        <div className="experience-card">

          <div className="experience-header">

            <div className="experience-icon">
              <FiBriefcase />
            </div>

            <div>

              <p className="experience-type">
                INTERNSHIP
              </p>

              <h3>
                Full Stack Development Intern
              </h3>

              <h4>
                JB Portals
              </h4>

            </div>

            <span className="experience-date">
              Jan 2024 — Apr 2024
            </span>

          </div>

          <div className="experience-divider"></div>

          <p className="experience-summary">
            Gained practical exposure to web application development,
            software testing and Agile development practices while
            working with a development team.
          </p>

          <div className="experience-points">

            <div>
              <FiCheckCircle />
              <span>
                Created and executed test cases to validate
                application functionality.
              </span>
            </div>

            <div>
              <FiCheckCircle />
              <span>
                Worked with user stories and participated in
                understanding application requirements.
              </span>
            </div>

            <div>
              <FiCheckCircle />
              <span>
                Participated in Agile stand-ups and followed
                SDLC practices.
              </span>
            </div>

            <div>
              <FiCheckCircle />
              <span>
                Used Jira for task tracking and team collaboration.
              </span>
            </div>

          </div>

          <div className="experience-tech">

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>Jira</span>
            <span>Agile</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;