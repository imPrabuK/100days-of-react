import React from "react";
import GroceryApp from "./components/Day06-LiftingState/GroceryApp";
import GroceryList from "./components/Day07-Lists and Keys/GroceryList";
import MainRouter from "./components/Day08-ReactRouter/MainRouter";
import ToDoApp from "./components/Day09-SimpleTo-Do /To-DoListApp";

function App() {
  const groceryItems = ["Apples", "Bananas", "Carrots", "Tomatoes"];

  return (
    <div className="App">
      <ToDoApp />
    </div>
  );
}

export default App;
