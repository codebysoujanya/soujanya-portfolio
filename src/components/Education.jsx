import { FiBookOpen, FiAward } from "react-icons/fi";

function Education() {
  const education = [
    {
      year: "2024 — 2027",
      degree: "B.E. Computer Science & Engineering",
      specialization: "Data Science",
      institution: "New Horizon College of Engineering, Bengaluru",
      result: "75%",
      current: true,
    },
    {
      year: "2021 — 2024",
      degree: "Diploma in Computer Science",
      specialization: "",
      institution: "SJES Polytechnic",
      result: "80%",
      current: false,
    },
    {
      year: "2021",
      degree: "10th Standard",
      specialization: "",
      institution: "Sree Venkateshwara English High School",
      result: "70%",
      current: false,
    },
  ];

  return (
    <section className="section education-section" id="education">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-number">05</span>

          <div>
            <p className="section-label">EDUCATION</p>

            <h2>
              Academic
              <span> journey.</span>
            </h2>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          {education.map((item) => (
            <div
              className={`education-item ${
                item.current ? "education-current" : ""
              }`}
              key={item.degree}
            >
              {/* Timeline Icon */}
              <div className="timeline-marker">
                {item.current ? <FiBookOpen /> : <FiAward />}
              </div>

              {/* Year */}
              <div className="education-year">
                {item.year}
              </div>

              {/* Education Details */}
              <div className="education-content">

                {item.current && (
                  <span className="current-badge">
                    CURRENT
                  </span>
                )}

                <h3>{item.degree}</h3>

                {item.specialization && (
                  <p className="education-specialization">
                    Specialization: {item.specialization}
                  </p>
                )}

                <p className="education-institution">
                  {item.institution}
                </p>

                <div className="education-result">
                  {item.result}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;