import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialstate = {
  todos: [{id:1,title:"hello world"}],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState: initialstate,
  reducers: {
    //state means the currentstate
    addtodo: (state, action) => {
      const todo = { id: nanoid(), title: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addtodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
