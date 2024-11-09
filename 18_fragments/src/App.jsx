import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  // let foodItems = [];
  let foodItems = [
    "Roti",
    "Dal",
    "Vegetable",
    "Protein",
    "Milk",
    "Curd",
    "Paneer",
  ];

  // second method
  // let emptyMessage =
  //   foodItems.length === 0 ? <h3>I am still hungry.</h3> : null;

  return (
    <React.Fragment>
      <h1 className="food-heading">Healty Food</h1>

      {/* here is the method to use condition  */}
      {/* first method  */}
      {/* {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null} */}
      {/* second method */}
      {/* {emptyMessage} */}

      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </React.Fragment>
  );
}

export default App;
