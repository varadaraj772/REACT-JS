import { useEffect, useState } from "react";
import "./App.css";
import { ContextProvider } from "./contexts/todoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todo, setTodos] = useState([]);

  const addTodo = (item) => {
    setTodos((prev) => [...prev, { ...item }]);
  };

  const updateTodo = (id, title) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? title : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((previtem) =>
        previtem.id === id
          ? { ...previtem, completed: !previtem.completed }
          : previtem
      )
    );
  };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("todo"));

    if (localData && localData.length > 0) {
      setTodos(localData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
    <ContextProvider
      value={{ todo, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todo.map((item, index) => (
              <div key={index} className="w-full">
                <TodoItem todo={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
