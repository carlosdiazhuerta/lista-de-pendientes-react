import "./CreateTodoButton.css";
import React from "react";
import { TodoContext } from "../TodoContex";

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);

  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        setOpenModal((value) => !value);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
