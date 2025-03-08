function Experience() {
  const experienceList = [
    { company: "IBM", role: "Senior Software Engineer", duration: "Aug 2024 - Present" },
    { company: "DEPT", role: "Software Engineer", duration: "Feb 2024 - Jul 2024" },
    { company: "Pine Labs", role: "Software Engineer", duration: "Aug 2021 - Jan 2024" },
    { company: "The Spark Foundation", role: "SDE Intern", duration: "May 2021 - Aug 2021" },
  ];

  return (
    <section className="experience">
      <h1>Professional Experience</h1>
      <div className="experience-container">
        {experienceList.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h2>{exp.company}</h2>
            <p><strong>{exp.role}</strong></p>
            <p>{exp.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;