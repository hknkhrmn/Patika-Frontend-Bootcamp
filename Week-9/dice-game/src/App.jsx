import React, { useState } from 'react';
import './App.css';

// Importing dice images from the assets folder
import d1 from './assets/dice1.png';
import d2 from './assets/dice2.png';
import d3 from './assets/dice3.png';
import d4 from './assets/dice4.png';
import d5 from './assets/dice5.png';
import d6 from './assets/dice6.png';

const diceImages = [d1, d2, d3, d4, d5, d6];

export default function App() {
  const [playerName, setPlayerName] = useState("Player 1");
  const [dice1, setDice1] = useState(3); // Shows 4 dots initially (index 3)
  const [dice2, setDice2] = useState(3); // Shows 4 dots initially (index 3)
  const [isRolling, setIsRolling] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Draw! 🤝");

  const rollDice = () => {
    if (isRolling) return;

    setIsRolling(true);
    setStatusMessage("Rolling...");

    let counter = 0;
    const interval = setInterval(() => {
      // Randomly change dice faces for the animation effect
      setDice1(Math.floor(Math.random() * 6));
      setDice2(Math.floor(Math.random() * 6));
      counter++;

      if (counter > 20) {
        clearInterval(interval);
        
        // Final Results
        const result1 = Math.floor(Math.random() * 6);
        const result2 = Math.floor(Math.random() * 6);
        
        setDice1(result1);
        setDice2(result2);
        setIsRolling(false);

        // Determine the winner
        if (result1 > result2) {
          setStatusMessage(`🚩 ${playerName} Wins!`);
        } else if (result2 > result1) {
          setStatusMessage("PC Wins! 🚩");
        } else {
          setStatusMessage("Draw! 🤝");
        }
      }
    }, 100);
  };

  return (
    <div className="dice-game-wrapper">
      <h1 className="game-title">{statusMessage}</h1>

      <div className="players-container">
        {/* Player 1 Section */}
        <div className="player-box">
          <input 
            type="text"
            className="player-name-input"
            value={playerName} 
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter Name"
          />
          <div className={`dice-container ${isRolling ? 'shake' : ''}`}>
             <img src={diceImages[dice1]} alt="Dice 1" className="dice-img" />
          </div>
        </div>

        {/* Player 2 (PC) Section */}
        <div className="player-box">
          <p className="player-label">Player 2 (PC)</p>
          <div className={`dice-container ${isRolling ? 'shake' : ''}`}>
            <img src={diceImages[dice2]} alt="Dice 2" className="dice-img" />
          </div>
        </div>
      </div>

      <button 
        onClick={rollDice} 
        disabled={isRolling} 
        className="roll-btn"
      >
        {isRolling ? "Wait..." : "Roll Dice"}
      </button>

      <footer className="footer">
        www 🎲 DiceeGame 🎲 com
      </footer>
    </div>
  );
}