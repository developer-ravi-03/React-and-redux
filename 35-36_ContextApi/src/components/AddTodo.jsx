import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} due on ${dueDate}`);

    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    // setTodoName("");
    // setDueDate("");
  };

  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            ref={todoNameElement}
            required
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            // value={dueDate}
            // onChange={handleDateChange}
            ref={dueDateElement}
            required
          />
        </div>
        <div className="col-2">
          <button
            // type="button"
            className="btn btn-success kg-button"
            // onClick={handleAddButtonClicked}
          >
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
