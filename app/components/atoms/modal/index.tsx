import React from "react";

type ModalProps = {
  isOpen: boolean;
  isSuccess: boolean;
  message: string;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  isSuccess,
  message,
  onClose,
}) => {
return (
    <>
        {isOpen && (
            <div className="modal" tabIndex={-1} style={{ display: isOpen ? "block" : "none" }}>
                <div className="modal-dialog">
                    <div
                        className={`modal-content ${isSuccess ? "success" : "failure"}`}
                    >
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {isSuccess ? "Success" : "Error"}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>{message}</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onClose}
                            >
                                Close
                            </button>
                            {isSuccess && (
                                <button type="button" className="btn btn-primary">
                                    Save changes
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
);
};
