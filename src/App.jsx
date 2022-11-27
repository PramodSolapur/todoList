import "./App.css";
import Alert from "./components/Alert";
import Card from "./components/Card";
import Input from "./components/Input";
import Modal from "./components/Modal";
import TodoList from "./components/TodoList";
import useGlobalContext from "./todoContext";

function App() {
  const { alertMsg, alertType, showAlert, toggleModal } = useGlobalContext();
  return (
    <div>
      {toggleModal && <Modal />}
      {showAlert && <Alert msg={alertMsg} type={alertType} />}
      <Card className="input">
        <Input />
      </Card>
      <Card>
        <TodoList />
      </Card>
    </div>
  );
}

export default App;
