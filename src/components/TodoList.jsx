import useGlobalContext from "../todoContext";
import Todo from "./Todo";

const TodoList = () => {
  const { todoList } = useGlobalContext();
  return (
    <>
      {todoList.length === 0 && (
        <p style={{ textAlign: "center" }}>No Todo's Found</p>
      )}
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
