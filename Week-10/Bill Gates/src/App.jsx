import React, { useState } from 'react';
import './App.css'; 

const INITIAL_MONEY = 100000000000;

const PRODUCTS = [
  { id: 1, name: 'Big Mac', price: 5, image: '🍔' },
  { id: 2, name: 'Movie Ticket', price: 12, image: '🎟️' },
  { id: 3, name: 'Video Game', price: 60, image: '🎮' },
  { id: 4, name: 'Smartphone', price: 1000, image: '📱' },
  { id: 5, name: 'Ferrari', price: 250000, image: '🏎️' },
  { id: 6, name: 'Yacht', price: 7500000, image: '🛥️' },
  { id: 7, name: 'Skyscraper', price: 850000000, image: '🏙️' },
  
];

function App() {
  const [money, setMoney] = useState(INITIAL_MONEY);
  const [basket, setBasket] = useState({});

  const buyItem = (product) => {
    if (money >= product.price) {
      setMoney(prev => prev - product.price);
      setBasket(prev => ({ ...prev, [product.id]: (prev[product.id] || 0) + 1 }));
    }
  };

  const sellItem = (product) => {
    if (basket[product.id] > 0) {
      setMoney(prev => prev + product.price);
      setBasket(prev => ({ ...prev, [product.id]: prev[product.id] - 1 }));
    }
  };

  const totalSpent = INITIAL_MONEY - money;

  return (
    <div className="container">
      <div className="header">
        <img src="https://neal.fun/spend/billgates.jpg" className="bill-img" alt="Bill Gates" />
        <h1>Spend Bill Gates' Money</h1>
      </div>

      <div className="money-bar">
        ${money.toLocaleString()}
      </div>

      <div className="product-grid">
        {PRODUCTS.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-emoji">{product.image}</div>
            <h3>{product.name}</h3>
            <div className="product-price">${product.price.toLocaleString()}</div>
            
            <div className="controls">
              <button 
                className="btn btn-sell"
                disabled={!basket[product.id] || basket[product.id] === 0}
                onClick={() => sellItem(product)}
              >Sell</button>
              
              <input className="count-input" type="text" readOnly value={basket[product.id] || 0} />
              
              <button 
                className="btn btn-buy"
                disabled={money < product.price}
                onClick={() => buyItem(product)}
              >Buy</button>
            </div>
          </div>
        ))}
      </div>

      {totalSpent > 0 && (
        <div className="receipt-container">
          <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Your Receipt</h2>
          {PRODUCTS.filter(p => basket[p.id] > 0).map(p => (
            <div key={p.id} className="receipt-item">
              <span>{p.name} x{basket[p.id]}</span>
              <span style={{color: '#27ae60', fontWeight: 'bold'}}>${(p.price * basket[p.id]).toLocaleString()}</span>
            </div>
          ))}
          <div className="total-line">
            <span>TOTAL</span>
            <span style={{color: '#27ae60'}}>${totalSpent.toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;