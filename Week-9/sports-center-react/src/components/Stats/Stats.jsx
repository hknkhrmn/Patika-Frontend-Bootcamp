function Stats() {
  const statsData = [
    { number: '325', label: 'Course' },
    { number: '405', label: 'Work Out' },
    { number: '305', label: 'Working Hour' },
    { number: '705', label: 'Happy Client' }
  ];

  return (
    <section className="stats">
      <StatsContainer statsData={statsData} />
    </section>
  );
}

function StatsContainer({ statsData }) {
  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <StatBox key={index} number={stat.number} label={stat.label} />
      ))}
    </div>
  );
}

function StatBox({ number, label }) {
  return (
    <div className="stat-box">
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  );
}

export default Stats;