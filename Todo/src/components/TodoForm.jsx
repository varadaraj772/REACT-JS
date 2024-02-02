import { useState } from "react";
import useTodoContext from "../contexts/todoContext";

function TodoForm() {
  const [items, setItems] = useState("");
  const { addTodo } = useTodoContext();
  const add = (e) => {
    e.preventDefault();
    if (!items) {
      return;
    }
    console.log(items);
    addTodo({ id: Date.now(), title: items, completed: false });
    setItems("")
  
  };
  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
