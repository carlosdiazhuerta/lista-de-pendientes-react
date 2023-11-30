import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContex";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  console.log(completedTodos, totalTodos);
  return (
    <>
      {totalTodos === completedTodos && (
        <h1 className="Title">
          ¡Felicidades, completaste todos las tareas a beber!
        </h1>
      )}
      {totalTodos !== completedTodos && (
        <h1 className="TodoCounter">
          <span> {completedTodos} </span>
          Tareas completadas de
          <span> {totalTodos} </span>
        </h1>
      )}
    </>
  );
}

export { TodoCounter };
