import {
  FiAward,
  FiCpu,
  FiCode,
  FiUsers,
} from "react-icons/fi";

function Achievements() {
  const achievements = [
    {
      icon: <FiAward />,
      title: "1st Prize — UI/UX Design",
      organization: "KS Polytechnic Talent Expo",
      description:
        "Recognized for UI/UX design skills using Figma.",
    },
    {
      icon: <FiCpu />,
      title: "NPTEL Certification",
      organization: "Internet of Things",
      description:
        "Completed certification demonstrating foundational knowledge of IoT concepts.",
    },
    {
      icon: <FiCode />,
      title: "Python Certification",
      organization: "IIT Bombay",
      description:
        "Completed Python 3.0 certification and strengthened programming fundamentals.",
    },
    {
      icon: <FiCpu />,
      title: "Generative AI Certification",
      organization: "Infosys",
      description:
        "Developed foundational understanding of Generative AI concepts and applications.",
    },
  ];

  return (
    <section
      className="section achievements-section"
      id="achievements"
    >
      <div className="container">
        <div className="section-heading">
          <span className="section-number">06</span>

          <div>
            <p className="section-label">ACHIEVEMENTS</p>

            <h2>
              Learning beyond
              <span> the classroom.</span>
            </h2>
          </div>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div
              className="achievement-card"
              key={achievement.title}
            >
              <div className="achievement-icon">
                {achievement.icon}
              </div>

              <div>
                <h3>{achievement.title}</h3>

                <p className="achievement-org">
                  {achievement.organization}
                </p>

                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="activities-card">
          <div className="activities-title">
            <div className="achievement-icon">
              <FiUsers />
            </div>

            <div>
              <p className="section-label">
                LEADERSHIP & ACTIVITIES
              </p>

              <h3>Active beyond academics</h3>
            </div>
          </div>

          <div className="activities-list">
            <span>Placement Drive Coordination</span>
            <span>Smart India Hackathon</span>
            <span>Coding Contests</span>
            <span>Community Activities</span>
            <span>Team Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;