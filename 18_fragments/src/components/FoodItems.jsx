import Item from "./Item";
const foodItems = ({ items }) => {
  // let foodItems = ["Roti", "Dal", "Vegetable", "Protein", "Milk", "Curd"];
  return (
    <>
      <ul className="list-group kg-item">
        {items.map((item) => (
          <Item key={item} foodItem={item}></Item>
        ))}
      </ul>
    </>
  );
};
export default foodItems;
