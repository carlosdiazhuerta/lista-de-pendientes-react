import "./Todolist.css";

function TodoList({ children }) {
  return (
    <>
      <ul classneme="TodoList">{children}</ul>
    </>
  );
}

export { TodoList };
