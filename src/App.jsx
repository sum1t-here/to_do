import './App.css';
import TodoList from './components/TodoList/TodoList.jsx';
import AddTodo from './components/AddTodo/AddTodo.jsx';
import TodoContext from './context/TodoContext.js';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([
    { id: 1, todoData: 'todo 1', finished: false },
    { id: 2, todoData: 'todo 2', finished: false },
  ]);
  return (
    <TodoContext.Provider value={{ list, setList }}>
      <AddTodo
        updateList={(todo) =>
          setList([
            ...list,
            {
              id: list.length + 1,
              todoData: todo,
              finished: false,
            },
          ])
        }
      />
      <TodoList />
    </TodoContext.Provider>
  );
}

export default App;
