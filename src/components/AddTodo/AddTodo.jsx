import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddTodo({ addTodo }) {
  const [inputText, setInputText] = useState('');

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
          addTodo({ todoText: inputText });
          setInputText('');
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
