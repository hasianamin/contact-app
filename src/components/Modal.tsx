import React from "react";
import "./Modal.css";

interface ModalProps {
  modal: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modal, toggleModal, children }) => {
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div style={{ minHeight: "50vh", maxWidth: "30vw" }}>
              {children}
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
