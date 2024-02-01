import { useState } from "react";
import "./App.css";
import useTodoContext, { ContextProvider } from "./contexts/todoContext";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (title) => {
    setTodos((prev) => prev.push({ id: Date.now(), ...title }));
  };
  const updateTodo = (id, title) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? title : prevTodo))
    );
  };
  return (
    <ContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo }}
    ></ContextProvider>
  );
}

export default App;
