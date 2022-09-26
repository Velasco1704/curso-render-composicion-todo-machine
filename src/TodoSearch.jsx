import React from "react";
import './styles/TodoSearch.css'

const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onSearchValue = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }

  return (
    <>
      <input className="TodoSearch" placeholder="Escribe tu TODO" value={searchValue} onChange={onSearchValue}/>
    </>
  );
};

export default TodoSearch;
