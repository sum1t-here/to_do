import { useState } from 'react';

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
  const [finished, setFinished] = useState(isFinished);
  const [isEditting, setIsEditting] = useState(false);
  const [editText, setEditText] = useState(todoData);

  const handleCheckboxChange = (e) => {
    setFinished(e.target.checked);
    changeFinished(e.target.checked);
  };
  return (
    <div>
      <input
        type='checkbox'
        checked={finished}
        onChange={handleCheckboxChange}
      />
      {isEditting ? (
        <input type='text' onChange={(e) => setEditText(e.target.value)} />
      ) : (
        <span>{todoData}</span>
      )}
      <button
        onClick={() => {
          setIsEditting(!isEditting);
          onEdit(editText);
        }}
      >
        {!isEditting ? 'Edit' : 'Save'}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Todo;
