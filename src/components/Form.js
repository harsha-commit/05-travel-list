import { useState } from "react";

// Optimal Coding
// form is submitted on button click or enter keystroke
// e.target.value is always a string (found from React DevTools)

export default function Form({ onAddItems }) {
  // controlled component is a component that is controlled by React state,
  // while an uncontrolled component is a component that maintains its own internal state
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function submitHandler(event) {
    // component is reloaded by default
    event.preventDefault();
    // we can extract values from event object also
    console.log(event);

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    // resetting the values
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3>What do you need for your trip ? 😍</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
