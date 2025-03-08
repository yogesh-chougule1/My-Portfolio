function Skills() {
  const techSkills = [
    "JavaScript", "SQL", "C++", "C", "TypeScript", "HTML-5"
  ];
  const backendSkills = [
    "Node.js", "RESTful APIs", "MySQL", "Redis", "Google Cloud"
  ];
  const frameworks = [
    "React.js", "Express.js", "Next.js", "JQuery", "Jinja 2", "Bootstrap","Tailwind CSS",
  ];
  const devOpsSkills = [
    "Google Cloud", "Git", "Bitbucket", "CI/CD"
  ];

  const sdeSkills = [
    "Data Structures","Algorithms","Problem Solving", "SDLC", "Distributed Systems", "Performance Optimization",
  ];
  return (
    <section className="skills">
      <h1>Technical Skills</h1>
      <div className="skills-container">
        {techSkills.map((skill, index) => (
          <div className="skill-card" key={index}>{skill}</div>
        ))}
      </div>

      <h1>Backend & Infrastructure</h1>
      <div className="skills-container">
        {backendSkills.map((skill, index) => (
          <div className="skill-card" key={index}>{skill}</div>
        ))}
      </div>

      <h1>Frameworks / Libraries</h1>
      <div className="skills-container">
        {frameworks.map((skill, index) => (
          <div className="skill-card" key={index}>{skill}</div>
        ))}
      </div>

      <h1>DevOps & Cloud</h1>
      <div className="skills-container">
        {devOpsSkills.map((skill, index) => (
          <div className="skill-card" key={index}>{skill}</div>
        ))}
      </div>

      <h1>Software Development</h1>
      <div className="skills-container">
        {sdeSkills.map((skill, index) => (
          <div className="skill-card" key={index}>{skill}</div>
        ))}
      </div>

    </section>
  );
}

export default Skills;