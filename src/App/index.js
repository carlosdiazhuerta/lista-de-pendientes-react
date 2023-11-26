import React from "react";
import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { useLocalStorage } from "./useLocalStore";

// Función personalizada para manejar el almacenamiento local

function App() {
  // Estado para manejar la lista de tareas y función para guardarla en el almacenamiento local
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

  // Estado para manejar el valor de búsqueda
  const [searchValue, setSearchValue] = React.useState("");

  // Calcular la cantidad de tareas completadas y el total de tareas
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  // Filtrar las tareas basado en el valor de búsqueda
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  // Función para marcar una tarea como completa
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  // Función para eliminar una tarea
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <>
      {/* Componente para mostrar el contador de tareas */}
      <TodoCounter completed={completedTodos} total={totalTodos} />

      {/* Componente para la barra de búsqueda */}
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      {/* Componente para la lista de tareas */}
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {/* Componente para el botón de crear nueva tarea */}
      <CreateTodoButton />
    </>
  );
}

export default App;
