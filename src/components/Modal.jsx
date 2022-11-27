import useGlobalContext from "../todoContext";
import Card from "./Card";
import ReactDOM from "react-dom";

const Modal = () => {
  const { hideModal, deleteItemId, deleteTodoHandler } = useGlobalContext();
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={hideModal}>
      <Card className="modal">
        <p>Do you want to Delete?</p>
        <div className="btns">
          <button type="button" className="cancel" onClick={hideModal}>
            Cancel
          </button>
          <button
            type="button"
            className="confirm"
            onClick={() => deleteTodoHandler(deleteItemId)}
          >
            Confirm
          </button>
        </div>
      </Card>
    </div>,
    document.getElementById("overlay")
  );
};

export default Modal;
