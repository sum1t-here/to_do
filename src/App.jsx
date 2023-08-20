import './App.css';
import TodoList from './components/TodoList/TodoList.jsx';
import AddTodo from './components/AddTodo/AddTodo.jsx';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([
    { id: 1, todoData: 'todo 1', finished: false },
    { id: 2, todoData: 'todo 2', finished: false },
  ]);
  return (
    <>
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
      <TodoList list={list} updateList={setList} />
    </>
  );
}

export default App;
