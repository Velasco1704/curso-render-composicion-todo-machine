import React from 'react';
import '../styles/EmptyTodo.css';

const EmptyTodo = () => {
  return (
    <div className='container-span-empty'>
      <span className='icon-empty'>📝</span>
      <p className='text-empty'>¡Crea tu primer TODO!</p>
    </div>
  );
};

export default EmptyTodo;