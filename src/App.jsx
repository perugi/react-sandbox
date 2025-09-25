import styles from "./App.module.css";

function ListItem({ animal }) {
  console.log({ animal });
  return <li>{animal}</li>;
}

function List({ animals }) {
  if (!animals) {
    return <div>Loading...</div>;
  }

  if (animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  console.log({ animals });

  return (
    <ul>
      {animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function App() {
  const animals = ["Snakes", "On", "A", "Plane"];

  return (
    <div>
      <h1>Animals:</h1>
      <List animals={animals} />
    </div>
  );
}

export default App;
