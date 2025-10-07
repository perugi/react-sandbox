import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const isValid = name && email.includes("@");

  return (
    <div>
      <label for="name">Name:</label>
      <input
        id="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label for="email">Email:</label>
      <input
        id="email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </div>
  );
}

export default App;
