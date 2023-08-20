import { useState } from 'react';

function Todo({ todoData, isFinished, changeFinished }) {
  const [finished, setFinished] = useState(isFinished);
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
      {todoData}
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default Todo;
