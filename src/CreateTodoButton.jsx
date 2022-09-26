import React from "react";
import "./styles/CreateTodoButton.css";

const CreateTodoButton = () => {
  const handleClick = () => {
    alert('Click')
  };

  return (
    <>
      <button className="CreateTodoButton" onClick={handleClick}>
        +
      </button>
    </>
  );
};

export default CreateTodoButton;
