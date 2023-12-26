import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  BaseModalStyled,
  CloseButton,
  CloseIcon,
  ModalContent,
  ModalHeader,
} from './BaseModalWindow.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';

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

  return createPortal(
    <BaseModalStyled onClick={onClose} ref={backdropRef}>
      <ModalContent
        type={type}
        onClick={e => e.stopPropagation()}
        ref={modalContainerRef}
      >
        <ModalHeader>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>
            <CloseIcon>
              <use href={`${sprite}#icon-outline`}></use>
            </CloseIcon>
          </CloseButton>
        </ModalHeader>
        <div>{children}</div>
      </ModalContent>
    </BaseModalStyled>,
    modalRoot,
  );
};

BaseModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onShow: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
