import React, { useState } from "react";
import ItemInput from "./ItemInput";
import ShoppingList from "./ShoppingList";

function GroceryApp() {
  const [items, setItems] = useState([]);

  const handleAddItem = (itemName, itemQuantity) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === itemName);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === itemName
            ? { ...item, quantity: item.quantity + itemQuantity }
            : item
        );
      } else {
        return [...prevItems, { name: itemName, quantity: itemQuantity }];
      }
    });
  };

  return (
    <div className="container">
      <h3>Family Grocery List</h3>
      <ItemInput onAddItem={handleAddItem} />
      <ShoppingList items={items} />
    </div>
  );
}

export default GroceryApp;
