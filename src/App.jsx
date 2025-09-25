import styles from "./App.module.css";

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "red",
  },
};

function App() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img src="https://imgur.com/7vQD0fPs.jpg" alt="" />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronatics lectures</li>
        <li>Work on the alcohol-fueled engine</li>
      </ul>
    </div>
  );
}

export default App;
