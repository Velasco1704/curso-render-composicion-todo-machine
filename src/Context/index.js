import { createContext } from 'react';
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const TodoContext = createContext();

export function TodoProvider(props) {
  const { item: todos, saveItem: saveTodos, loading, error, } = useLocalStorage("TODOS_V1", []);

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
  return(
    <TodoContext.Provider value={{
      totalTodos,
      completedTodoCounter,
      searchValue,
      setSearchValue,
      error,
      loading,
      searchTodos,
      completedTodo,
      deleteTodo,
    }}>
        {props.children}
    </TodoContext.Provider>
  );
};