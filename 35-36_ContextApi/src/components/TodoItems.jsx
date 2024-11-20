import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import css from "./TodoItems.module.css";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  // console.log(todoItemsFromContext);

  return (
    <>
      <div className={css.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={uuidv4()}
            todoTime={item.duedate}
            todoName={item.name}
          />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
