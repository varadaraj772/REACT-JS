import { createContext, useContext } from "react";
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "hello world",
      completed: false,
    },
  ],
  addTodo: (id, title) => {},
  updateTodo: (id, title) => {},
  deleteTodo: (id) => {},
});
export const ContextProvider = TodoContext.Provider;
export default function useTodoContext () {
  return useContext(TodoContext);
}
