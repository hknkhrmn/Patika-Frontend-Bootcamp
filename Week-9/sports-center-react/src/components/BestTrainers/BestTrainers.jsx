function BestTrainers() {
  const trainers = [
    { name: 'Ebru Şallı', role: 'Fitness Trainer', image: '/assets/trainer1.jpg' },
    { name: 'Jhon Doe', role: 'Strength Coach', image: '/assets/trainer2.jpg' },
    { name: 'Jane Doe', role: 'Cardio Trainer', image: '/assets/trainer3.jpg' }
  ];

  return (
    <section className="best-trainers" id="trainer">
      <TrainerHeader />
      <TrainerGrid trainers={trainers} />
    </section>
  );
}

function TrainerHeader() {
  return (
    <div className="best-trainers-header">
      <h1>OUR BEST TRAINERS</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit esse mollitia excepturi adipisci vitae in
        animi a dolorum culpa earum.
      </p>
    </div>
  );
}

function TrainerGrid({ trainers }) {
  return (
    <div className="trainers">
      {trainers.map((trainer, index) => (
        <TrainerCard key={index} trainer={trainer} />
      ))}
    </div>
  );
}

function TrainerCard({ trainer }) {
  return (
    <div className="trainer-card">
      <div className="left-line"></div>
      <div className="right-line"></div>
      <img src={trainer.image} alt={trainer.name} className="trainer-image" />
      <div className="trainer-overlay">
        <h3>{trainer.name}</h3>
        <p>{trainer.role}</p>
      </div>
    </div>
  );
}

export default BestTrainers;