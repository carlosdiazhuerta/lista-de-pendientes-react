import "./Todolist.css";

function TodoList(props) {
  return (
    <>
      <section className="Todolist-Container">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {!props.loading && !props.searchedTodos.length && props.onEmpty()}
        {props.searchedTodos.map(props.render)}
        <ul classneme="TodoList">{props.childrem}</ul>
      </section>
    </>
  );
}

export { TodoList };
