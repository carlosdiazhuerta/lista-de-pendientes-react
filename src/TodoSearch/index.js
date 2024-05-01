import React from "react";
import "./TodoSerach.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <>
      <input
        className="TodoSearch"
        placeholder="busca tu pendiente vago!"
        value={searchValue}
        disabled={loading}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </>
  );
}

export { TodoSearch };
