import React from "react";
import "./TodoSerach.css";
import { TodoContext } from "../TodoContex";
function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <>
      <input
        className="TodoSearch"
        placeholder="busca tu pendiente vago!"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </>
  );
}

export { TodoSearch };
