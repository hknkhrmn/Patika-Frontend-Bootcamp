import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import OurClasses from './components/OurClasses/OurClasses';
import BMICalculator from './components/BMICalculator/BMICalculator';
import BestTrainers from './components/BestTrainers/BestTrainers';
import Purchase from './components/Purchase/Purchase';
import Review from './components/Review/Review';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <OurClasses />
      <BMICalculator />
      <BestTrainers />
      <Purchase />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;