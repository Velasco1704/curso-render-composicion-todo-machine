import React from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import CreateTodoButton from "../CreateTodoButton";

const AppUI = ({
      totalTodos,
      completedTodoCounter,
      searchValue, 
      setSearchValue,
      error,
      loading,
      searchTodos,
      completedTodo,
      deleteTodo,
}) => {
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
};

export default AppUI;
