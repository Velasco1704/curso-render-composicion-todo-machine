import React from "react";
import { useContext } from "react";
import { TodoContext } from "../Context";
import '../styles/TodoCounter.css';

const TodoCounter = () => {
  const { totalTodos, completedTodoCounter } = useContext(TodoContext);
  return (
    <>
      <h1 className="TodoCounter"> Has completado {completedTodoCounter} de {totalTodos} TODOs  </h1>
    </>
  );
};

export default TodoCounter;
