function Hero() {
  return (
    <section className="powerfull" id="powerfull">
      <div className="powerfull-content">
        <HeroTag />
        <HeroTitle />
        <HeroDescription />
        <HeroButtons />
      </div>
    </section>
  );
}

function HeroTag() {
  return <span className="tag">POWERFULL</span>;
}

function HeroTitle() {
  return (
    <h1>
      Group <br />
      Practice <br />
      With Trainer
    </h1>
  );
}

function HeroDescription() {
  return (
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum sunt dicta quibusdam deserunt natus atque nihil
      sapiente quae aperiam sed? Ratione veniam accusantium, repudiandae beatae ducimus distinctio! Doloremque tempora
      maiores aut at?
    </p>
  );
}

function HeroButtons() {
  return (
    <div className="buttons">
      <a href="#" className="btn-primary">Sign Up</a>
      <a href="#" className="btn-outline">Details</a>
    </div>
  );
}

export default Hero;