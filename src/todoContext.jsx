import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoItems")) || []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editItemId, setEditItemId] = useState(null);
  const [alert, setAlert] = useState({
    alertMsg: "",
    showAlert: false,
    alertType: "",
  });
  const [toggleModal, setToggleModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const showModal = (todoId) => {
    setToggleModal(true);
    setDeleteItemId(todoId);
  };

  const hideModal = () => {
    setToggleModal(false);
    setDeleteItemId(null);
  };

  const clearAlert = () => {
    const timer = setTimeout(() => {
      setAlert({
        alertMsg: "",
        showAlert: false,
        alertType: "",
      });
    }, 3000);
  };

  const displayAlert = (msg, type) => {
    setAlert({
      alertMsg: msg,
      showAlert: true,
      alertType: type,
    });
    clearAlert();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedTodoList = todoList.map((todo) => {
        if (todo.id === editItemId) {
          return { ...todo, title: todoName };
        }
        return todo;
      });
      setTodoList(updatedTodoList);
      displayAlert("Todo Edited Successfully! ", "info");
      setEditItemId(null);
      setIsEditing(false);
    } else {
      setTodoList((prevList) => [
        ...prevList,
        { id: todoList.length + 1, title: todoName },
      ]);
      displayAlert("Todo Added Successfully! ", "success");
    }
    setTodoName("");
  };

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoList));
  }, [todoList]);

  const deleteTodoHandler = (todoId) => {
    const newTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newTodoList);
    displayAlert("Todo Deleted Successfully! ", "danger");
    hideModal();
  };

  const setEditTodoItem = (todoId) => {
    const todoItem = todoList.find((todo) => todo.id === todoId);
    setIsEditing(true);
    setEditItemId(todoItem.id);
    setTodoName(todoItem.title);
  };

  return (
    <TodoContext.Provider
      value={{
        ...alert,
        setTodoName,
        todoName,
        deleteTodoHandler,
        setEditTodoItem,
        todoList,
        handleSubmit,
        isEditing,
        setAlert,
        toggleModal,
        showModal,
        hideModal,
        deleteItemId,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(TodoContext);
};

export default useGlobalContext;
