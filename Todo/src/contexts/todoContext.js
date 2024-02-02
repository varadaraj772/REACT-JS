import { createContext, useContext } from "react";
export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      title: "hello world",
      completed: false,
    },
  ],
  addTodo: (title) => {},
  updateTodo: (id, title) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const ContextProvider = TodoContext.Provider;
export default function useTodoContext() {
  return useContext(TodoContext);
}
