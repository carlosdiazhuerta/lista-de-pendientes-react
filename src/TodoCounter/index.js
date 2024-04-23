import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos }) {
  console.log(completedTodos, totalTodos);
  return (
    <>
      {totalTodos === completedTodos && (
        <h1 className="Title">
          ¡Felicidades, completaste todas las tareas a beber!
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
