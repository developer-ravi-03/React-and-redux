/* eslint-disable react/prop-types */
import css from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={css.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.id}
            todoTime={item.duedate}
            todoName={item.name}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
