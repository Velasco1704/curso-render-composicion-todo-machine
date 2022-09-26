import React from "react";
import './styles/TodoCounter.css';

const TodoCounter = ({ total, completed }) => {
  return (
    <>
      <h1 className="TodoCounter"> Has completado {completed} de {total} TODOs  </h1>
    </>
  );
};

export default TodoCounter;
