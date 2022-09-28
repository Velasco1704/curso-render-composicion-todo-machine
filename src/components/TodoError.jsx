import React from 'react';
import '../styles/TodoError.css';

const TodoError = ({ error }) => {
  return (
    <div className='container-span-error'>
      <span className='icon-error'>🛠️</span>
      <p className='text-error'>{error}</p>
    </div>
  );
};

export default TodoError;