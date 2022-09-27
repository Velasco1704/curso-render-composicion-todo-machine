import React from "react";
import { useState } from "react";
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
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  if(!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    const stringiFiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringiFiedTodos);
    setTodos(newTodos);
  };

  const completedTodo = (text) => {
    const todosIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos, ];
    newTodos[todosIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const todosIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos, ];
    newTodos.splice(todosIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodoCounter} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
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
