import AddTodo from "./Component/AddTodo";
import AppName from "./Component/AppName";
import TodoItems from "./Component/TodoItems";
import "./App.css";

function App() {

  const todoItems = [{
    name: "Buy Milk",
    dueDate: "4/10/2023"
  },
  {
    name: "Go to College",
    dueDate: "4/10/2023"
  },
  ]
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  )

}

export default App;