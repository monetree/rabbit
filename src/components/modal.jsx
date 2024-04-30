import "./style.scss";
import Close from "../../assets/icons/close.svg";

const ModalComponent = ({
  setIsModal,
  children,
  height = "auto",
  lg = false,
}) => {
  return (
    <div className="modal show-modal">
      <div
        className={`modal-content modal-content-padding ${
          lg ? "modal-content-lg" : ""
        }`}
        style={{ minHeight: height }}
      >
        <img
          src={Close}
          className="close-button text-primary-purple1 w-8"
          onClick={() => setIsModal(false)}
        />
        <div className="px-2 py-16 sm:px-12">{children}</div>
      </div>
    </div>
  );
};

export default ModalComponent;
