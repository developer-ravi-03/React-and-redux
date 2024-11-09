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
const Item = ({ foodItem }) => {
  return (
    <li className={`${styles["kg-item"]}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
    </li>
  );
};
export default Item;
