import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJs,
} from "react-icons/fa";

import {
  SiMysql,
  SiMongodb,
  SiPandas,
  SiNumpy,
  SiJupyter,
} from "react-icons/si";

function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
    },

    {
      title: "Data Science",
      skills: [
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Matplotlib", icon: "📊" },
        { name: "Data Analysis", icon: "📈" },
      ],
    },

    {
      title: "Development",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: "◉" },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "REST APIs", icon: "↗" },
      ],
    },

    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Jupyter", icon: <SiJupyter /> },
        { name: "Tableau", icon: "▦" },
        { name: "VS Code", icon: "⌘" },
        { name: "Eclipse", icon: "◆" },
      ],
    },
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">02</span>

          <div>
            <p className="section-label">TECHNICAL SKILLS</p>

            <h2>
              Technologies I
              <span> work with.</span>
            </h2>
          </div>
        </div>

        <p className="section-description">
          A growing technical toolkit built through academic work,
          internships, projects and continuous hands-on practice.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-icon">
                      {skill.icon}
                    </span>

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;