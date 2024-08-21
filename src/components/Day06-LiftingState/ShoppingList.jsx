import React from "react";

function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.name} - {item.quantity}
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;
