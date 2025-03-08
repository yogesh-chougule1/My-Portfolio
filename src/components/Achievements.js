function Achievements() {
  const achievementsList = [
    { title: "Men with Perfectionist Award", issuer: "IBM, Mumbai Maharashtra", year: "2024" },
    { title: "Employee of the Year", issuer: "Pine Labs, Mumbai Maharashtra", year: "2023" },
    { title: "First Prize in College Tech Events", issuer: "D.G.Ruparel College, Mumbai Maharashtra", year: "2021" }
  ];

  return (
    <section className="achievements">
      <h1>Achievements</h1>
      <div className="achievements-container">
        {achievementsList.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <h2>{achievement.title}</h2>
            <p><strong>{achievement.issuer}</strong></p>
            <p>{achievement.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;