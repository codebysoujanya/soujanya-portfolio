import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";

function Contact() {
  return (
    <section className="section contact-section" id="contact">

      <div className="container">

        <div className="contact-box">

          <div className="contact-content">

            <p className="section-label">
              GET IN TOUCH
            </p>

            <h2>
              Let's build something
              <span> meaningful.</span>
            </h2>

            <p>
              I'm currently exploring internship, software development,
              data science and AI opportunities where I can learn,
              contribute and grow with a strong team.
            </p>

            <a
              href="mailto:your-email@gmail.com"
              className="contact-email"
            >
              <FiMail />
              gsoujanya824@gmail.com
              <FiArrowUpRight />
            </a>

          </div>

          <div className="contact-links">

            <a
              href="https://github.com/codebysoujanya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
              <span>
                <small>GITHUB</small>
                github.com/codebysoujanya
              </span>
              <FiArrowUpRight />
            </a>

            <a
              href="https://www.linkedin.com/in/soujanya-g-438575377/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
              <span>
                <small>LINKEDIN</small>
                Connect with me
              </span>
              <FiArrowUpRight />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;