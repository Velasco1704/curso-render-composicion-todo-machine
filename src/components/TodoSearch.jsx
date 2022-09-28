import React from "react";
import { useContext } from "react";
import { TodoContext } from '../Context';
import '../styles/TodoSearch.css'

const TodoSearch = () => {
  const { searchValue, setSearchValue, loading } = useContext(TodoContext)
  const onSearchValue = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }

  return (
    <>
      <input className="TodoSearch" placeholder="Buscar..." value={searchValue} onChange={onSearchValue} disabled={loading}/>
    </>
  );
};

export default TodoSearch;
