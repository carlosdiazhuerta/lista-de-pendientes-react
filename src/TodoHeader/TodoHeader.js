import React from "react";
import { useTodos } from "../App/useTodo";
function TodoHeader({ children }) {
  const { loading } = useTodos();
  const childrenCarga = React.Children.map(children, (child) => {
    return React.cloneElement(child, { loading });
  });

  return <header>{childrenCarga}</header>;
}

export { TodoHeader };
