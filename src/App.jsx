import styles from "./App.module.css";
import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "seaweed", id: 1 },
  { title: "granola", id: 2 },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [selectedItemIdx, setSelectedItemIdx] = useState(0);

  function handleItemChange(id, e) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <h2>What's your feavorite snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={(e) => {
                handleItemChange(item.id, e);
              }}
            />
            <button
              onClick={() => {
                setSelectedItemIdx(index);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {items[selectedItemIdx].title}.</p>
    </>
  );
}

export default App;

function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
