import React from "react";
import { useContext } from "react";
import { TodoContext } from "../Context";
import TodoCounter from "../components/TodoCounter";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import CreateTodoButton from "../components/CreateTodoButton.jsx";
import TodoForm from "../components/TodoForm";
import TodoLoading from '../components/TodoLoading';
import EmptyTodo from '../components/EmptyTodo';
import TodoError from '../components/TodoError';
import Modal from "../Modal";

function AppUI() {
  const { error, loading, searchTodos, completedTodo, deleteTodo, openModal, setOpenModal } = useContext(TodoContext)
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <CreateTodoButton setOpenModal={setOpenModal}/>
          <TodoList>
            {error && <TodoError error={error} />}
            {loading && <TodoLoading />}
            {!loading && !searchTodos.length && <EmptyTodo />}
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
          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}

    </>
  );
}

export default AppUI;
