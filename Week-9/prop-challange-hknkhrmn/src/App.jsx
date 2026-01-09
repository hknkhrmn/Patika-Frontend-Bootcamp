// src/App.jsx
import { useState } from 'react';
import UserInfo from './UserInfo';

function App() {
  const [user, setUser] = useState({ name: "Ahmet", age: 25 });

  return (
    <div className="App">
      <UserInfo name={user.name} age={user.age} />
      
      {/* Testlerin beklediği butonlar */}
      <button onClick={() => setUser({ name: "Ahmet", age: 25 })}>Ahmet</button>
      
      <button 
        id="1" 
        onClick={() => setUser({ name: "Mehmet", age: 30 })}
      >
        Mehmet
      </button>

      <button onClick={() => setUser({ name: "Cemil", age: 20 })}>Cemil</button>

      <button onClick={() => setUser({ name: "Ada", age: "Bilinmiyor" })}>Ada</button>
    </div>
  );
}

export default App;