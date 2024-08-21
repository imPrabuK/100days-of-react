import React, { useState } from "react";

function ItemInput({ onAddItem }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (item.trim() !== "") {
      onAddItem(item, quantity);
      setItem("");
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        placeholder="Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
      />
      <button onClick={handleAdd}>Add to List</button>
    </div>
  );
}

export default ItemInput;
