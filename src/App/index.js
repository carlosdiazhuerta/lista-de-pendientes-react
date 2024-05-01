import React from "react";
import { useTodos } from "./useTodo";
import { TodoHeader } from "../TodoHeader/TodoHeader.js";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoding";
import { EmptyTodos } from "../EmptyTodos";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { ChangeAlertWithStoragelistener } from "../ChangeAlert/ChangeAlert.js";
import { Modal } from "../modal";

function App() {
  const {
    sincronizedTodo,
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        searchText={searchValue}
        totalTodos={totalTodos}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptySearchResult={(searchText) => (
          <p>no hay resultados para {searchText} </p>
        )}
        onEmpty={() => <EmptyTodos />}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlertWithStoragelistener sincronized={sincronizedTodo} />
    </React.Fragment>
  );
}

export default App;
