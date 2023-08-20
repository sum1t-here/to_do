import Todo from '../Todo/Todo.jsx';

function TodoList({ list, updateList }) {
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
              updateList(updatedList);
            }}
          />
        ))}
    </div>
  );
}
export default TodoList;
