import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiCode,
} from "react-icons/fi";

function Hero() {
  const goToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="home">

      <div className="hero-bg">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container hero-container">

        {/* LEFT */}
        <div className="hero-content">

          <div className="availability">
            <span></span>
            Open to internships & opportunities
          </div>

          <p className="hero-small-title">
            Hello, I'm
          </p>

          <h1>
            Soujanya <span>G.</span>
          </h1>

          <h2>
            CSE (Data Science) Student
            <span> · </span>
            Software Developer
          </h2>

          <p className="hero-description">
            I am a Computer Science & Engineering student specializing
            in Data Science, passionate about building practical software,
            data-driven applications and intelligent AI solutions.
          </p>

          <div className="hero-details">
            <span>
              <FiMapPin />
              Bengaluru, India
            </span>

            <span>
              <FiCode />
              Graduating 2027
            </span>
          </div>

          <div className="hero-actions">

            <button
              className="primary-btn"
              onClick={goToProjects}
            >
              Explore My Work
              <FiArrowRight />
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              <FiDownload />
              Download Resume
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/codebysoujanya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/soujanya-g-438575377/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>

            <span className="social-line"></span>

            <span className="social-text">
              Let's build something meaningful.
            </span>

          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-visual">

          <div className="code-card">

            <div className="code-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>soujanya.py</span>
            </div>

            <div className="code-body">

              <p>
                <span className="code-purple">class</span>{" "}
                <span className="code-blue">Developer</span>:
              </p>

              <p className="indent">
                <span className="code-purple">def</span>{" "}
                <span className="code-yellow">__init__</span>
                (self):
              </p>

              <p className="double-indent">
                self.name ={" "}
                <span className="code-green">
                  "Soujanya G."
                </span>
              </p>

              <p className="double-indent">
                self.role ={" "}
                <span className="code-green">
                  "Software Developer"
                </span>
              </p>

              <p className="double-indent">
                self.focus = [
              </p>

              <p className="triple-indent">
                <span className="code-green">
                  "AI"
                </span>
                ,
              </p>

              <p className="triple-indent">
                <span className="code-green">
                  "Data Science"
                </span>
                ,
              </p>

              <p className="triple-indent">
                <span className="code-green">
                  "Software"
                </span>
              </p>

              <p className="double-indent">]</p>

              <p className="code-comment">
                # Always learning. Always building.
              </p>

            </div>

          </div>

          <div className="floating-tech tech-one">
            Python
          </div>

          <div className="floating-tech tech-two">
            React
          </div>

          <div className="floating-tech tech-three">
            AI / ML
          </div>

        </div>
      </div>

      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>

    </section>
  );
}

export default Hero;