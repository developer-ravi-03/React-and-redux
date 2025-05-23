/* eslint-disable react/prop-types */
import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((items) => (
        <button
          key={items}
          onClick={() => onButtonClick(items)}
          className={styles.button}
        >
          {items}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
