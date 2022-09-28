import React from "react";
import { useContext } from "react";
import { TodoContext } from '../Context';
import '../styles/TodoSearch.css'

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext)
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
