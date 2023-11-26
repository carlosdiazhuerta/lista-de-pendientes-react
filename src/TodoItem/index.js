import React from "react";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={() => props.onComplete(props.text)}
      >
        <FaCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={() => props.onDelete(props.text)}
      >
        <RxCross2 />
      </span>
    </li>
  );
}

export { TodoItem };
