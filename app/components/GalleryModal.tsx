import React, { useEffect, useRef } from 'react';

interface GalleryModalProps {
  images: string[];
  open: boolean;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ images, open, index, onClose, onPrev, onNext }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const lastActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      lastActiveElement.current = document.activeElement as HTMLElement;
      // Focus the close button when modal opens
      closeBtnRef.current?.focus();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        } else if (e.key === 'Tab') {
          // Trap focus within modal
          const focusable = [closeBtnRef.current, prevBtnRef.current, nextBtnRef.current].filter(Boolean) as HTMLElement[];
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          } else if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else if (e.key === 'ArrowLeft') {
          onPrev();
        } else if (e.key === 'ArrowRight') {
          onNext();
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        // Restore focus to last active element
        lastActiveElement.current?.focus();
      };
    }
  }, [open, onClose, onPrev, onNext]);

  if (!open || images.length === 0) return null;

  return (
    <div className="gallery-overlay" role="presentation">
      <div
        className="gallery-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Project image gallery"
        ref={modalRef}
      >
        <button
          onClick={onClose}
          className="gallery-modal-close"
          aria-label="Close gallery"
          ref={closeBtnRef}
        >
          &times;
        </button>
        <button
          onClick={onPrev}
          className="gallery-modal-prev"
          aria-label="Previous image"
          ref={prevBtnRef}
        >
          &lt;
        </button>
        <img
          src={images[index]}
          alt={`Project screenshot ${index + 1} of ${images.length}`}
          className="gallery-modal-image"
          tabIndex={-1}
          aria-live="polite"
        />
        <button
          onClick={onNext}
          className="gallery-modal-next"
          aria-label="Next image"
          ref={nextBtnRef}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;
