import "./Todolist.css";

function TodoList(props) {
  const renderFunc = props.childrem || props.render;
  return (
    <>
      <section className="Todolist-Container">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {!props.loading && !props.totalTodos && props.onEmpty()}
        {props.totalTodos &&
          !props.searchedTodos.length &&
          props.onEmptySearchResult(props.searchText)}
        {props.searchedTodos.map(props.render)}
        <ul classneme="TodoList">{renderFunc}</ul>
      </section>
    </>
  );
}

export { TodoList };
