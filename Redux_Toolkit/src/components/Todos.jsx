import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Features/todo/todoSlice";

const Todos = () => {
  const todosList = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <br />
      <hr />
      <h1 className=" text-3xl">TO-DOs</h1>

      {todosList.map((item) => (
        <li
          key={item.id}
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded text-white"
        >
          {item.title}
          <button
            onClick={() => dispatch(removeTodo(item.id))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
          >
            X
          </button>
        </li>
      ))}
    </div>
  );
};

export default Todos;
