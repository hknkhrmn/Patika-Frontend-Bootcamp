import { useState, useEffect } from 'react';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('#3d5a80');
  const [arrowPosition, setArrowPosition] = useState(0);

  useEffect(() => {
    calculateBMI();
  }, [height, weight]);

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      setBmi(0);
      setCategory('');
      setColor('#3d5a80');
      setArrowPosition(0);
      return;
    }

    const heightInMeters = h / 100;
    const calculatedBmi = w / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi);

    let position;
    let categoryText;
    let categoryColor;

    if (calculatedBmi < 18.5) {
      position = (calculatedBmi / 18.5) * 20;
      categoryColor = '#6CB4EE';
      categoryText = 'Underweight';
    } else if (calculatedBmi < 25) {
      position = 20 + ((calculatedBmi - 18.5) / (25 - 18.5)) * 20;
      categoryColor = '#4CAF50';
      categoryText = 'Normal';
    } else if (calculatedBmi < 30) {
      position = 40 + ((calculatedBmi - 25) / (30 - 25)) * 20;
      categoryColor = '#FFEB3B';
      categoryText = 'Overweight';
    } else if (calculatedBmi < 35) {
      position = 60 + ((calculatedBmi - 30) / (35 - 30)) * 20;
      categoryColor = '#FF9800';
      categoryText = 'Obese';
    } else {
      const maxBMI = 50;
      position = 80 + Math.min(((calculatedBmi - 35) / (maxBMI - 35)) * 20, 20);
      categoryColor = '#F44336';
      categoryText = 'Extremely Obese';
    }

    setColor(categoryColor);
    setCategory(categoryText);
    setArrowPosition(position);
  };

  return (
    <section className="calculator">
      <div className="calculator-container">
        <BMIInfo height={height} weight={weight} setHeight={setHeight} setWeight={setWeight} />
        <BMIResult bmi={bmi} category={category} color={color} arrowPosition={arrowPosition} />
      </div>
    </section>
  );
}

function BMIInfo({ height, weight, setHeight, setWeight }) {
  return (
    <div className="left-section">
      <h1>BMI Calculator</h1>
      <br />
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old.
      </p>
      <br />
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old.
      </p>
      <BMIInputs height={height} weight={weight} setHeight={setHeight} setWeight={setWeight} />
    </div>
  );
}

function BMIInputs({ height, weight, setHeight, setWeight }) {
  return (
    <div className="input-group">
      <div className="input-selective">
        <input
          className="box-in"
          type="number"
          placeholder="Your Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <span className="unit">cm</span>
      </div>
      <div className="input-selective">
        <input
          className="box-in"
          type="number"
          placeholder="Your Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <span className="unit">kg</span>
      </div>
    </div>
  );
}

function BMIResult({ bmi, category, color, arrowPosition }) {
  return (
    <div className="right-section">
      <div className="bmi-header">
        <div className="bmi-result" style={{ color: color }}>
          {bmi.toFixed(1)}
        </div>
        {category && (
          <div style={{
            fontSize: '18px',
            fontWeight: '600',
            marginTop: '2px',
            color: color
          }}>
            {category}
          </div>
        )}
      </div>
      <img src="/assets/resim.jpg" alt="BMI Chart" className="bmi-image" />
      <div className="indicator">
        <div
          className="arrow"
          style={{
            borderBottomColor: color,
            left: `${arrowPosition}%`,
            display: bmi > 0 ? 'block' : 'none'
          }}
        ></div>
      </div>
    </div>
  );
}

export default BMICalculator;