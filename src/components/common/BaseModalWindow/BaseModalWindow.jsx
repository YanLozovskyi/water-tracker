import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  BaseModalStyled,
  CloseButton,
  // CloseIcon,
} from './BaseModalWindow.styled';
// import sprite from 'src/assets/images/sprite/sprite.svg';

export const BaseModalWindow = ({
  onShow = true,
  type,
  children,
  title,
  onClose,
}) => {
  const modalRoot = document.querySelector('#modal-root');

  const modalContainerRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (!onShow) return;

    const bodyScroll = disable => {
      document.body.style.overflow = disable ? 'hidden' : 'auto';
    };

    if (onShow || modalRoot.children.length !== 0) {
      bodyScroll(true);
    }

    const handleEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [modalRoot.children.length, onShow, onClose]);

  return (
    <BaseModalStyled onClick={onClose} ref={backdropRef}>
      <div className="modal-content" type={type} ref={modalContainerRef}>
        <div className="modal-header">
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>
            &times;
            {/* <CloseIcon>
              <use href={`${sprite}#icon-outline`}></use>
            </CloseIcon> */}
          </CloseButton>
        </div>
        <div>{children}</div>
      </div>
    </BaseModalStyled>
  );
};

BaseModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onShow: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
