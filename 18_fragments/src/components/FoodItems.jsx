/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Item from "./Item";
const foodItems = ({ items }) => {
  // let foodItems = ["Roti", "Dal", "Vegetable", "Protein", "Milk", "Curd"];
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <>
      <ul className="list-group kg-item">
        {items.map((item) => (
          <Item
            key={item}
            foodItem={item}
            bought={activeItems.includes(item)}
            handleBuyButton={() => onBuyButton(item, event)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default foodItems;
