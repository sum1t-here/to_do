import './App.css';
import TodoList from './components/TodoList/TodoList.jsx';
import AddTodo from './components/AddTodo/AddTodo.jsx';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addTodo,
  deleteTodo,
  editTodo,
  todoFinished,
} from './actions/todoActions.js';
// import TodoContext from './context/TodoContext.js';
// import { useReducer } from 'react';
// import ToDoDispatchContext from './context/TodoDispatchContext.js';
// import todoReducer from './reducers/todoReducer.js';

function App() {
  // const [list, setList] = useState([
  //   { id: 1, todoData: 'todo 1', finished: false },
  //   { id: 2, todoData: 'todo 2', finished: false },
  // ]);

  // const [list, dispatch] = useReducer(todoReducer, []);

  const dispatch = useDispatch();
  const actions = bindActionCreators(
    {
      addTodo,
      deleteTodo,
      editTodo,
      todoFinished,
    },
    dispatch
  );
  return (
    <>
      {/* <TodoContext.Provider value={{ list }}> */}
      {/* <ToDoDispatchContext.Provider value={{ dispatch }}> */}
      <AddTodo
        addTodo={actions.addTodo}
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
      <TodoList
        deleteTodo={actions.deleteTodo}
        edit_todo={actions.editTodo}
        todoFinished={actions.todoFinished}
      />
      {/* </ToDoDispatchContext.Provider> */}
      {/* </TodoContext.Provider> */}
    </>
  );
}

export default App;
