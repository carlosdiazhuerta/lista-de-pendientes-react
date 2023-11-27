import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { CreateTodoButton } from "../CreateTodoButton/index";

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      {/* Componente para mostrar el contador de tareas */}
      <TodoCounter completed={completedTodos} total={totalTodos} />

      {/* Componente para la barra de búsqueda */}
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      {/* Componente para la lista de tareas */}
      <TodoList>
        {loading && <p>estamos cargando...</p>}
        {error && <>oh no tenemos un error</>}
        {!loading && searchedTodos.length === 0 && (
          <p>Agrega tu primer pendiente con el botón de mas.</p>
        )}
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

export { AppUI };