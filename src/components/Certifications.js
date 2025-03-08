function Certifications() {
  const certificationsList = [
    { title: "Software Development Certification", issuer: "Keerti Institute", year: "2021" },
    { title: "Full Stack Web Development", issuer: "Coursera", year: "2022" }
  ];

  return (
    <section className="certifications">
      <h1>Certifications</h1>
      <div className="certifications-container">
        {certificationsList.map((cert, index) => (
          <div className="certification-card" key={index}>
            <h2>{cert.title}</h2>
            <p><strong>{cert.issuer}</strong></p>
            <p>{cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;