import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSerach";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./TodoButton";
import { TodoItem } from "./TodoItem";

const defaultTodos = [
  {
    text: "cortar cebolla",
    completed: true,
  },
  {
    text: "cortar tomate",
    completed: false,
  },
  {
    text: "hervir agua",
    completed: true,
  },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={15} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
