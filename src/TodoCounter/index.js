import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <>
      {total === completed && (
        <h1 className="Title">
          ¡Felicidades, completaste todos las tareas a beber!
        </h1>
      )}
      {total !== completed && (
        <h1 className="TodoCounter">
          <span> {completed} </span>
          Tareas completadas de
          <span> {total} </span>
        </h1>
      )}
    </>
  );
}

export { TodoCounter };
