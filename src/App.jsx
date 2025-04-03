import { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const handleClick = () => {
    setHeading("Radical Rhinos");
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <h1>{heading}</h1>
    </>
  );
}

export default App;
