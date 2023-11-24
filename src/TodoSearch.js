import React from "react";
import "./TodoSerach.css";
function TodoSearch({ searchValue, setSearchValue }) {
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
