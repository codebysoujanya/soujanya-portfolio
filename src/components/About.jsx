import {
  FiTarget,
  FiDatabase,
  FiCpu,
  FiLayers,
} from "react-icons/fi";

function About() {
  return (
    <section className="section about-section" id="about">

      <div className="container">

        <div className="section-heading">

          <span className="section-number">
            01
          </span>

          <div>
            <p className="section-label">
              ABOUT ME
            </p>

            <h2>
              Turning ideas into
              <span> useful solutions.</span>
            </h2>
          </div>

        </div>

        <div className="about-grid">

          <div className="about-text">

            <p className="large-text">
              I’m a <strong>CSE (Data Science) student</strong> at
              New Horizon College of Engineering, Bengaluru,
              currently in my 7th semester.
            </p>

            <p>
              I enjoy solving real-world problems through software
              development, data analysis and artificial intelligence.
              My goal is to continuously strengthen my technical skills
              while creating applications that are practical,
              scalable and user-focused.
            </p>

            <p>
              My current focus areas include{" "}
              <strong>software engineering, data science,
              AI-powered applications and full-stack development.</strong>
            </p>

            <div className="about-stats">

              <div>
                <strong>2027</strong>
                <span>Graduation</span>
              </div>

              <div>
                <strong>4+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>1</strong>
                <span>Internship</span>
              </div>

            </div>

          </div>

          <div className="about-cards">

            <div className="about-card">

              <div className="about-card-icon">
                <FiLayers />
              </div>

              <h3>Software Development</h3>

              <p>
                Building responsive applications and backend
                systems using modern development technologies.
              </p>

            </div>

            <div className="about-card">

              <div className="about-card-icon">
                <FiDatabase />
              </div>

              <h3>Data & Analytics</h3>

              <p>
                Working with Python, SQL and data analysis
                tools to transform data into meaningful insights.
              </p>

            </div>

            <div className="about-card">

              <div className="about-card-icon">
                <FiCpu />
              </div>

              <h3>AI & Intelligent Systems</h3>

              <p>
                Exploring AI, machine learning and intelligent
                systems through projects such as EduCoreAI.
              </p>

            </div>

            <div className="about-card">

              <div className="about-card-icon">
                <FiTarget />
              </div>

              <h3>Problem Solving</h3>

              <p>
                Interested in solving technical problems with
                structured thinking and continuous learning.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;