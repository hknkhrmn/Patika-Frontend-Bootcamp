import React, { useState } from 'react';
import './App.css'; 

const INITIAL_MONEY = 100000000000;

const PRODUCTS = [
  { id: 1, name: 'Kahve', price: 3, image: 'images/kahve.webp' },
  { id: 2, name: 'Netflix Aboneliği ', price: 15, image: 'images/netflix.png' },
  { id: 3, name: 'AirPods MAX', price: 250, image: 'images/airpods.webp' },
  { id: 4, name: 'PlayStation 5 Pro', price: 750, image: 'images/ps5pro.jpg' },
  { id: 5, name: 'iPhone 17 Pro', price: 2000, image: 'images/iphone.webp' },
  { id: 6, name: 'Rolex Saat', price: 15000, image: 'images/rolex.webp' },
  { id: 7, name: 'Tesla Model 3', price: 40000, image: 'images/tesla.webp' },
  { id: 8, name: 'Lamborghini', price: 500000, image: 'images/lamporgini.webp' },
  { id: 9, name: 'Özel Jet', price: 65000000, image: 'images/özelJet.png' },
  { id: 10, name: 'Özel Ada', price: 50000000, image: 'images/ada.webp' },
  { id: 11, name: 'Uzay Turizmi Bileti', price: 250000, image: 'images/uzay.jpg' },
  { id: 12, name: 'Süperlig Takımı', price: 2000000000, image: 'images/takım.jpg' },
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
            <img 
              src={product.image} 
              alt={product.name}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
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