/* eslint-disable react/prop-types */
import styles from "./Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      value={displayValue}
      readOnly
      className={styles.display}
    />
  );
};
export default Display;
