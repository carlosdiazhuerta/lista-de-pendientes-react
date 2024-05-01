import React from "react";
import "./TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <>
      {totalTodos === completedTodos && (
        <h1 className="Title">
          ¡Felicidades, completaste todas las tareas a beber!
        </h1>
      )}
      {totalTodos !== completedTodos && (
        <h1 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
          <span> {completedTodos} </span>
          Tareas completadas de
          <span> {totalTodos} </span>
        </h1>
      )}
    </>
  );
}

export { TodoCounter };
