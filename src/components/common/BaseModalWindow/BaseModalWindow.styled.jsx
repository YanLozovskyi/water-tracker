import styled from '@emotion/styled';

export const BaseModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;

  &.base-modal-enter {
    opacity: 0;
  }

  &.base-modal-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }

  &.base-modal-exit {
    opacity: 1;
  }

  &.base-modal-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in-out 200ms;
  }
`;

export const ModalContent = styled.div`
  translate: -50% -50%;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 280px;
  max-height: 90vh;
  background: ${({ theme }) => theme.color.white};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: auto;
  z-index: 1;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    min-width: 592px;
  }

  &.modal-content-enter {
    opacity: 0;
    scale: 0.5;
  }

  &.modal-content-enter-active {
    opacity: 1;
    scale: 1;
    transition:
      opacity 300ms ease-in-out 200ms,
      scale 200ms ease-in-out 200ms;
  }

  &.modal-content-exit {
    opacity: 1;
    scale: 1;
  }

  &.modal-content-exit-active {
    opacity: 0;
    scale: 0.5;
    transition:
      opacity 300ms ease-in-out,
      scale 200ms ease-in-out;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ stylesPadding }) =>
    stylesPadding ? stylesPadding : '24px 12px'};
  color: ${({ theme }) => theme.color.black};

  h2 {
    font-weight: 500;
    font-size: 26px;
    line-height: 1.2;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 32px;
  }
`;

export const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  padding: 0;
`;

export const CloseIcon = styled.svg`
  width: 100%;
  height: 100%;
  stroke: ${({ theme }) => theme.color.accent};

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.color.secondaryYellow};
  }
`;
