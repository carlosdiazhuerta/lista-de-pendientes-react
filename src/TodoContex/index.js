import React from "react";
import { useLocalStorage } from "./useLocalStore";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = React.useCallback(
    (text) => {
      saveTodos((prevTodos) => {
        const newTodos = [...prevTodos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        return newTodos;
      });
    },
    [saveTodos]
  );

  const deleteTodo = React.useCallback(
    (text) => {
      saveTodos((prevTodos) => {
        const newTodos = [...prevTodos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        return newTodos;
      });
    },
    [saveTodos]
  );

  React.useEffect(() => {
    // Lógica adicional si es necesaria
  }, []);

  return (
    <>
      <TodoContext.Provider
        value={{
          loading,
          error,
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
}

export { TodoProvider, TodoContext };
