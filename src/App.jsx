import React from 'react';
import TodoCounter from './TodoCounter';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CreateTodoButton from './CreateTodoButton';
import './styles/App.css';

const listTodos = [
  { text: "Cortar la cebolla", completed: true },
  { text: "Tomar curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Sacar la basura", completed: true },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {listTodos.map(item => (
          <TodoItem key={item.text} text={item.text} completed={item.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
