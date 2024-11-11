import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  // let foodItems = [
  //   "Roti",
  //   "Dal",
  //   "Vegetable",
  //   "Protein",
  //   "Milk",
  //   "Curd",
  //   "Paneer",
  // ];

  // second method
  // let emptyMessage =
  //   foodItems.length === 0 ? <h3>I am still hungry.</h3> : null;

  // let textStateArr = useState("Food item enterd by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        {/* here is the method to use condition  */}
        {/* first method  */}
        {/* {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null} */}
        {/* second method */}
        {/* {emptyMessage} */}

        <h1 className="food-heading">Healty Food</h1>
        <FoodInput handleOnKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy food that are good for your health and
          well being
        </p>
      </Container> */}
    </>
  );
}

export default App;
