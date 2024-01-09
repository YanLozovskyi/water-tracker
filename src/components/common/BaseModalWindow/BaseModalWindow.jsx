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
import { CSSTransition } from 'react-transition-group';

export const BaseModalWindow = ({
  onShow = true,
  children,
  title,
  onClose,
  stylesPadding,
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
      bodyScroll(false);
      window.removeEventListener('keydown', handleEsc);
    };
  }, [modalRoot.children.length, onShow, onClose]);

  return createPortal(
    <>
      <CSSTransition
        in={onShow}
        nodeRef={backdropRef}
        timeout={600}
        classNames="base-modal"
        unmountOnExit
      >
        <BaseModalStyled onClick={onClose} ref={backdropRef} />
      </CSSTransition>
      <CSSTransition
        in={onShow}
        ref={modalContainerRef}
        timeout={600}
        classNames="modal-content"
        unmountOnExit
      >
        <ModalContent
          onClick={e => e.stopPropagation()}
          ref={modalContainerRef}
        >
          <ModalHeader stylesPadding={stylesPadding}>
            <h2>{title}</h2>
            <CloseButton onClick={onClose}>
              <CloseIcon>
                <use href={`${sprite}#icon-outline`}></use>
              </CloseIcon>
            </CloseButton>
          </ModalHeader>
          <div>{children}</div>
        </ModalContent>
      </CSSTransition>
    </>,
    modalRoot,
  );
};

BaseModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onShow: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
