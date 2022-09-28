import React from "react";
import "../styles/CreateTodoButton.css";

const CreateTodoButton = (props) => {
  const handleClick = () => {
    props.setOpenModal(prevState => !prevState)
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
