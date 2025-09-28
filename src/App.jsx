import styles from "./App.module.css";
import { v4 as uuid } from "uuid";

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

const todos = [
  { task: "mow the yard", id: uuid() },
  { task: "work on TOP", id: uuid() },
  { task: "feed the cat", id: uuid() },
];

function App() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}

export default App;
