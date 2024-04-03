import "./style.css";
import Close from "../../assets/close.svg";

const ModalComponent = ({ setIsModal, children, height = "auto" }) => {
  return (
    <div className="modal show-modal">
      <div className={`modal-content`} style={{ minHeight: height }}>
        <img
          src={Close}
          className="close-button"
          onClick={() => setIsModal(false)}
        />
        <div className="px-2 py-16 sm:px-12">{children}</div>
      </div>
    </div>
  );
};

export default ModalComponent;
