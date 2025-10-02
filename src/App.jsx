import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((prevNumber) => prevNumber + 1);
          setNumber((prevNumber) => prevNumber + 1);
          setNumber((prevNumber) => prevNumber + 1);
        }}
      >
        +3
      </button>
    </div>
  );
}

export default App;
