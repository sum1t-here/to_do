import { useContext, useState } from 'react';
import TodoDispatchContext from '../../context/TodoDispatchContext.js';

function AddTodo({}) {
  // updateList
  const [inputText, setInputText] = useState('');
  const { dispatch } = useContext(TodoDispatchContext);
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
          dispatch({ type: 'add_todo', payload: { todoText: inputText } });
          setInputText('');
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
