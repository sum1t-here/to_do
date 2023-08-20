import Todo from '../Todo/Todo.jsx';
import TodoContext from '../../context/TodoContext.js';
import { useContext } from 'react';

function TodoList() {
  const { list, setList } = useContext(TodoContext);
  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isFinished={todo.finished}
            todoData={todo.todoData}
            changeFinished={(isFinished) => {
              list.map((t) => {
                if (t.id == todo.id) {
                  todo.finished = isFinished;
                }
                return todo;
              });
              setList(updatedList);
            }}
          />
        ))}
    </div>
  );
}
export default TodoList;
