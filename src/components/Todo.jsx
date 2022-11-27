import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import useGlobalContext from "../todoContext";

const Todo = ({ todo }) => {
  const { setEditTodoItem, showModal } = useGlobalContext();
  return (
    <div className="todo-info" key={todo.id}>
      <p>{todo.title}</p>
      <div className="btnContainer">
        <button className="icon edit">
          <FaRegEdit size={20} onClick={() => setEditTodoItem(todo.id)} />
        </button>
        <button className="icon delete">
          <MdOutlineDelete size={20} onClick={() => showModal(todo.id)} />
        </button>
      </div>
    </div>
  );
};

export default Todo;
