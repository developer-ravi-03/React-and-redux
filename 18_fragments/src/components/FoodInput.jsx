/* eslint-disable react/prop-types */
import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnKeyDown }) => {
  //method 2
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };

  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter food here"
      //method 1
      // onChange={(event) => console.log(event.target.value)}

      //method 2
      // onChange={handleOnChange}

      //method 3 from parent in the form of function
      // onChange={handleOnChange}

      onKeyDown={handleOnKeyDown}
    />
  );
};

export default FoodInput;
