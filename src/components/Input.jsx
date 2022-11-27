import useGlobalContext from "../todoContext";

const Input = () => {
  const { setTodoName, todoName, handleSubmit, isEditing } = useGlobalContext();
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button
        type="submit"
        disabled={!todoName}
        className={isEditing && `btn-edit`}
      >
        {isEditing ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default Input;
