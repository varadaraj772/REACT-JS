import {  useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../Features/todo/todoSlice";

function Addtodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = () => {
    dispatch(addtodo(input));
    setInput("");
  };
  return (
    <div className="space-x-3 mt-12">
      <input
        type="text"
        className=" bg-slate-200 rounded border-solid border-gray-950 border-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-950 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="button"
        className="text-white bg-green-500 border-solid border-gray-950 border-2 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
        onClick={addTodoHandler}
      >
        Add Todo
      </button>
    </div>
  );
}

export default Addtodo;
