import styles from "./Item.module.css";
/* eslint-disable react/prop-types */

//first method
// const Item = (props) => {
//   return <li className="list-group-item">{props.foodItem}</li>;
// };
// export default Item;

//second method
// const Item = (props) => {
//   let { foodItem } = props;
//   return <li className="list-group-item">{foodItem}</li>;
// };
// export default Item;

//third method
const Item = ({ foodItem, bought, handleBuyButton }) => {
  //method 2 of on click
  // const handleBuyButtonClicked = (foodItem) => {
  //   console.log(`${foodItem} being bought`);
  // };

  //method 3 of on click
  // const handleBuyButtonClicked = () => {
  //   console.log(`${foodItem} being bought`);
  // };

  //method 4 of event method in on click
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} being bought`);
  // };

  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info `}
        //method 1 of on click
        // onClick={() => console.log(`${foodItem} being bought`)}

        //method 2 of on click
        // onClick={() => handleBuyButtonClicked(foodItem)}

        //method 3 of on click
        // onClick={handleBuyButtonClicked}

        //method 4 of event method in on click
        // onClick={(event) => handleBuyButtonClicked(event)}

        //method 5 from parent in form of function
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
