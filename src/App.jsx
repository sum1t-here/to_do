import './App.css';
import TodoList from './components/TodoList/TodoList.jsx';
import AddTodo from './components/AddTodo/AddTodo.jsx';
import TodoContext from './context/TodoContext.js';
import { useReducer } from 'react';
import ToDoDispatchContext from './context/TodoDispatchContext.js';
import todoReducer from './reducers/todoReducer.js';

function App() {
  // const [list, setList] = useState([
  //   { id: 1, todoData: 'todo 1', finished: false },
  //   { id: 2, todoData: 'todo 2', finished: false },
  // ]);

  const [list, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ list }}>
      <ToDoDispatchContext.Provider value={{ dispatch }}>
        <AddTodo
        // updateList={(todo) => {
        //   // setList([
        //   //   ...list,
        //   //   {
        //   //     id: list.length + 1,
        //   //     todoData: todo,
        //   //     finished: false,
        //   //   },
        //   // ])

        //   dispatch({ type: 'add_todo', payload: { todoText: todo } });
        //}}
        />
        <TodoList />
      </ToDoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
