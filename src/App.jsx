import styles from "./App.module.css";
import { useState } from "react";

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function CounterControls({ count, increment, decrement }) {
  return (
    <div>
      <p>Current Count: {count}</p>
      <Button label="Increment" onClick={increment} />
      <Button label="Decrement" onClick={decrement} />
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <CounterControls
      count={count}
      increment={() => setCount(count + 1)}
      decrement={() => setCount(count - 1)}
    />
  );
}

export default App;
