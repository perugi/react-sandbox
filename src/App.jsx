import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

function Profile({ user }) {
  const [width, setWidth] = useState(window.innerWidth);

  const fullName = `${user.first} ${user.last}`;

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h1>{fullName}</h1>
      <p>Window width: {width}</p>
    </div>
  );
}

function App() {
  return <Profile user={{ first: "Dominik", last: "Perusko" }} />;
}

export default App;
