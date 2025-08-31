import React from 'react';

interface GalleryModalProps {
  images: string[];
  open: boolean;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ images, open, index, onClose, onPrev, onNext }) => {
  if (!open || images.length === 0) return null;

  return (
    <div className="gallery-overlay">
      <div className="gallery-modal">
        <button onClick={onClose} className="gallery-modal-close">&times;</button>
        <button onClick={onPrev} className="gallery-modal-prev">&lt;</button>
        <img src={images[index]} alt="Project screenshot" className="gallery-modal-image" tabIndex={-1} />
        <button onClick={onNext} className="gallery-modal-next">&gt;</button>
      </div>
    </div>
  );
};

export default GalleryModal;
