import { useState } from 'react';
import UserInfo from './UserInfo';

function App() {
  const [selectedUser, setSelectedUser] = useState({ name: "Ahmet", age: 25 });

  const users = [
    { id: "0", name: "Ahmet", age: 25 },
    { id: "1", name: "Mehmet", age: 30 },
    { id: "2", name: "Cemil", age: 20 },
    { id: "3", name: "Ada", age: null }
  ];

  const handleUserChange = (user) => {
    setSelectedUser({ name: user.name, age: user.age });
  };

  return (
    <div>
      <h2>Prop Challenge</h2>
      <UserInfo name={selectedUser.name} age={selectedUser.age} />
      <div>
        {users.map((user) => (
          <button
            key={user.id}
            id={user.id}
            onClick={() => handleUserChange(user)}
          >
            {user.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;