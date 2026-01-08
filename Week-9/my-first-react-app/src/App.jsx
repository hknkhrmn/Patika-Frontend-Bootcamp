import { phoneBook } from "./data";
import Person from "./components/Person/Person";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>My First React Project </h1>
      <div className="person-list">
        {phoneBook.map((item) => (
          <Person key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;