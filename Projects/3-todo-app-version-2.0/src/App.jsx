import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoTiems = [
    {
      id: 1,
      name: "Go to college",
      duedate: "06/12/2024",
    },
    {
      id: 2,
      duedate: "right now",
      name: "Subscribe my video",
    },
    {
      id: 3,
      name: "Buy milk",
      duedate: "16/12/2024",
    },
    {
      id: 4,
      name: "Eat pizza",
      duedate: "09/12/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoTiems} />
    </center>
  );
}

export default App;
