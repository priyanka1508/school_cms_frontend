import React from "react";
import "./ImageModel.css";

const ImageModal = ({ isOpen, image, onClose, onNext, onPrev }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay flex flex-col gap-2" onClick={onClose}>
      <div className="flex flex-row justify-evenly items-center" onClick={(e) => e.stopPropagation()}>
        <button onClick={onPrev} className="modal-prev">
          &larr;
        </button>

        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-end flex-row modal-close">
            <span className="" onClick={onClose}>
              &times;
            </span>
          </div>

          <img
            src={image.imageUrl}
            alt={image.imageDescription}
            className="modal-image"
          />
          <div className="modal-description flex flex-col justify-start">
            <h3>{image.imageDescription}</h3>
            <p>{new Date(image.createdAt).toLocaleDateString()}</p>
          </div>
          {/* <div className="modal-nav">
          <button onClick={onPrev} className="modal-prev">
            &larr;
          </button>
          <button onClick={onNext} className="modal-next">
            &rarr;
          </button>
        </div> */}
        </div>

        <button onClick={onNext} className="modal-next" >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
