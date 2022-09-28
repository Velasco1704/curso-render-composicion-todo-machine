import React from "react";
import { useContext } from "react";
import { TodoContext } from '../Context/index'
import "../styles/CreateTodoButton.css";

const CreateTodoButton = (props) => {
  const { loading } = useContext(TodoContext)
  const handleClick = () => {
    props.setOpenModal(prevState => !prevState)
  };

  return (
    <>
      <button className="CreateTodoButton" onClick={handleClick} disabled={loading}>
        +
      </button>
    </>
  );
};

export default CreateTodoButton;
