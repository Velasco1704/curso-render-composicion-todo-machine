import React from "react";
import { useContext } from "react";
import { TodoContext } from "../Context";
import TodoCounter from "../components/TodoCounter";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import CreateTodoButton from "../components/CreateTodoButton.jsx";

function AppUI() {
  const { error, loading, searchTodos, completedTodo, deleteTodo } = useContext(TodoContext)
  return (
    <>
      <TodoCounter />
      <TodoSearch />
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

export default AppUI;
