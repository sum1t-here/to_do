import { useState } from 'react';
// import TodoDispatchContext from '../../context/TodoDispatchContext.js';
import { useDispatch } from 'react-redux';
// import { addTodo } from '../../actions/todoActions.js';
function AddTodo({ addTodo }) {
  // updateList
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState('');
  // const { dispatch } = useContext(TodoDispatchContext);
  return (
    <div>
      <input
        type='text'
        value={inputText}
        placeholder='add your next todo ...'
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          // updateList(inputText)
          addTodo(inputText);
          setInputText('');
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
