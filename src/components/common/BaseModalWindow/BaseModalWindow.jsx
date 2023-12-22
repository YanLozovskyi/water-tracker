import { useEffect, useRef } from 'react';
import { BaseModalStyled, CloseButton } from './BaseModalWindow.styled';

export const BaseModalWindow = ({ children, title, onClose }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = event => {
      if (!modalContainerRef.current.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const modalContainerRef = useRef(null);

  return (
    <BaseModalStyled>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        ref={modalContainerRef}
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>
            <a href="#">
              <svg width="24" height="24">
                <use href="/assets/images/sprite/symbol-defs.svg#icon-outline"></use>
              </svg>
            </a>
          </CloseButton>
        </div>
        <div>{children}</div>
      </div>
    </BaseModalStyled>
  );
};
