import styles from "./App.module.css";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </div>
  );
}

export default App;
