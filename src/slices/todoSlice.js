import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (todo, action) => {
      console.log('addTodo action:', action);
      let todoText = action.payload.todoText;
      console.log('Current state:', todoText);
      todo.todoList.push({
        id: todo.todoList.length + 1,
        todoData: todoText,
        finished: false,
      });
    },

    editTodo: (todo, action) => {
      let payloadTodo = action.payload.todo;
      let todoText = action.payload.todoText;
      todo.todoList = todo.todoList.map((t) => {
        if (t.id === payloadTodo.id) {
          t.todoData = todoText;
        }
      });
      return t;
    },
    todoFinished: (todo, action) => {
      let payloadTodo = action.payload.todo;
      let isFinished = action.payload.isFinished;
      todo.todoList = todo.todoList.map((t) => {
        if (t.id == payloadTodo.id) {
          todo.finished = isFinished;
        }
        return t;
      });
    },
    deleteTodo: (todo, action) => {
      let payloadTodo = action.payload.todo;
      todo.todoList = todo.todoList.filter((t) => t.id != payloadTodo.id);
    },
  },
});

export const { deleteTodo, editTodo, addTodo, todoFinished } =
  todoSlice.actions;
export default todoSlice.reducer;
