import React from "react";
import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";
import "./styles/App.css";

// const defaultTodos = [
//   { text: "Cortar la cebolla", completed: false },
//   { text: "Tomar curso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Sacar la basura", completed: false },
//   { text: "Hacer la cama", completed: false },
// ];

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
      <TodoCounter total={totalTodos} completed={completedTodoCounter} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {error && <p>Desesperate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchTodos.length && <p>¡Crea tu primer TODO!</p>}
        {searchTodos.map((item) => (
          <TodoItem
            key={item.text}
            text={item.text}
            completed={item.completed}
            onComplete={() => completedTodo(item.text)}
            onDelete={() => deleteTodo(item.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
