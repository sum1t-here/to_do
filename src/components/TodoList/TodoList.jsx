import Todo from '../Todo/Todo.jsx';
import TodoContext from '../../context/TodoContext.js';
import { useContext } from 'react';
import TodoDispatchContext from '../../context/TodoDispatchContext.js';

function TodoList() {
  const { list } = useContext(TodoContext);
  const { dispatch } = useContext(TodoDispatchContext);

  function onFinished(todo, isFinished) {
    // const updatedList = list.map((t) => {
    //   if (t.id == todo.id) {
    //     todo.finished = isFinished;
    //   }
    //   return t;
    // });
    // setList(updatedList);
    dispatch({ type: 'finish_todo', payload: { todo, isFinished } });
  }

  function onDelete(todo) {
    // const updatedList = list.filter((t) => t.id != todo.id);
    // setList(updatedList);
    dispatch({ type: 'delete_todo', payload: { todo } });
  }

  function onEdit(todo, todoText) {
    // const updatedList = list.map((t) => {
    //   if (t.id == todo.id) {
    //     todo.todoData = todoText;
    //   }
    //   return t;
    // });
    // setList(updatedList);
    dispatch({ type: 'edit_todo', payload: { todo, todoText } });
  }

  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isFinished={todo.finished}
            todoData={todo.todoData}
            changeFinished={(isFinished) => onFinished(todo, isFinished)}
            onDelete={() => onDelete(todo)}
            onEdit={(todoText) => onEdit(todo, todoText)}
          />
        ))}
    </div>
  );
}
export default TodoList;
