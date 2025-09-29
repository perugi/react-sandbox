import styles from "./App.module.css";
import { useState } from "react";

function Card({ title = "Panel", children }) {
  return (
    <div style={{ border: "1px solid black", padding: "1em" }}>
      <h2 style={{ fontSize: "24px" }}>{title}</h2>
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Card title="This is a panel">
        <p>This is come content</p>
        <button>Click me</button>
      </Card>
      <Card>
        <p>I'm reusable!</p>
      </Card>
    </div>
  );
}

export default App;
