import React, { useReducer, useState, useEffect, useRef } from 'react';
import './App.css';

const LEVELS = {
  KOLAY: 6,   // 6 çift (12 kart)
  ORTA: 12,   // 12 çift (24 kart)
  ZOR: 25     // 25 çift (50 kart)
};

const initialState = {
  cards: [],
  selected: [],
  moves: 0,
  score: 0,
  started: false,
  timer: 0,
  level: LEVELS.ORTA
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LEVEL':
      return { ...state, level: action.level, started: false };

    case 'START':
      const pairCount = state.level;
      const cards = Array.from({ length: pairCount }, (_, i) => {
        const id = i + 1;
        const img = `/images/card${id}.jpg`;
        return [
          { id: `a-${id}`, img, flipped: false, matched: false },
          { id: `b-${id}`, img, flipped: false, matched: false }
        ];
      }).flat().sort(() => Math.random() - 0.5);
      
      return { ...state, cards, started: true, moves: 0, score: 0, timer: 0, selected: [] };

    case 'TICK':
      return { ...state, timer: state.timer + 1 };

    case 'FLIP':
      if (state.selected.length >= 2 || !state.started) return state;
      const newCards = state.cards.map(c => 
        c.id === action.id ? { ...c, flipped: true } : c
      );
      return { ...state, cards: newCards, selected: [...state.selected, action.id] };

    case 'CHECK':
      const [id1, id2] = state.selected;
      const c1 = state.cards.find(c => c.id === id1);
      const c2 = state.cards.find(c => c.id === id2);
      const isMatch = c1.img === c2.img;

      return {
        ...state,
        cards: state.cards.map(c => {
          if (c.id === id1 || c.id === id2) {
            return isMatch ? { ...c, matched: true } : { ...c, flipped: false };
          }
          return c;
        }),
        selected: [],
        moves: state.moves + 1,
        score: isMatch ? state.score + 1 : state.score
      };

    default:
      return state;
  }
}

function CardGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const timerRef = useRef(null);

  // Ses efektleri
  const playSound = (type) => {
     const audio = new Audio(`/sounds/${type}.mp3`);
     audio.play().catch(() => {}); 
    console.log("Ses çalıyor: ", type); 
  };

  // Zamanlayıcı 
  useEffect(() => {
    if (state.started && state.score < state.level) {
      timerRef.current = setInterval(() => dispatch({ type: 'TICK' }), 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [state.started, state.score, state.level]);

  // Eşleşme kontrolü
  useEffect(() => {
    if (state.selected.length === 2) {
      setTimeout(() => {
        const [id1, id2] = state.selected;
        const c1 = state.cards.find(c => c.id === id1);
        const c2 = state.cards.find(c => c.id === id2);
        
        if (c1.img === c2.img) playSound('match');
        else playSound('flip');
        
        dispatch({ type: 'CHECK' });
      }, 800);
    }
  }, [state.selected]);

  return (
    <div className="container">
      <h1 className="title">NBA STAR MEMORY</h1>

      <div className="level-buttons">
        {Object.entries(LEVELS).map(([name, val]) => (
          <button 
            key={name}
            className={`btn-level ${state.level === val ? 'active' : ''}`}
            onClick={() => dispatch({ type: 'SET_LEVEL', level: val })}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="stats-bar">
        <div className="stat-card"> {state.timer}s</div>
        <div className="stat-card"> {state.score}/{state.level}</div>
        <div className="stat-card"> {state.moves} Hamle</div>
      </div>

      <button className="btn start-btn" onClick={() => dispatch({ type: 'START' })}>
        {state.started ? 'YENİDEN BAŞLAT' : 'OYUNA BAŞLA'}
      </button>

      {state.score === state.level && state.started && (
        <div className="win-overlay">
          <h1>MVP SENSİN! 🏆</h1>
          <p>{state.timer} saniyede {state.moves} hamle ile bitirdin.</p>
          <button className="btn" onClick={() => dispatch({ type: 'START' })}>TEKRAR OYNA</button>
        </div>
      )}

      <div className="grid">
        {state.cards.map(card => (
          <div key={card.id} className="card-wrapper" onClick={() => {
            if (!card.flipped && !card.matched) {
              playSound('click');
              dispatch({ type: 'FLIP', id: card.id });
            }
          }}>
            <div className={`card ${card.flipped || card.matched ? 'flipped' : ''}`}>
              <div className="front">🏀</div>
              <div className="back">
                <img src={card.img} alt="NBA" className="card-img" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGame;