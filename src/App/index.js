import React from "react";
import AppUI from "./AppUI";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import "../styles/App.css";

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const completedTodoCounter = todos.filter(
    (item) => item.completed === true
  ).length;
  const totalTodos = todos.length;

  let searchTodos = [];
  if (!searchValue.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completedTodo = (text) => {
    const todosIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todosIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todosIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todosIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <AppUI 
      totalTodos={totalTodos} 
      completedTodoCounter={completedTodoCounter}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      error={error}
      loading={loading}
      searchTodos={searchTodos}
      completedTodo={completedTodo}
      deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
