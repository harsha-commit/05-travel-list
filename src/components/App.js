import { useState } from "react";
import "../index.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  // lifting the state up (for form and packing list)
  const [items, setItems] = useState([]);

  function deleteItemHandler(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function addItemsHandler(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function toogleItemHandler(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItemsHandler() {
    // boolean return type
    const confirmed = window.confirm(
      "Are you sure you want to DELETE ALL ITEMS ?? 🤔"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={addItemsHandler} />
      <PackingList
        items={items}
        onDeleteItem={deleteItemHandler}
        onToggleItem={toogleItemHandler}
        onClearItems={clearItemsHandler}
      />
      <Stats items={items} />
    </div>
  );
}
