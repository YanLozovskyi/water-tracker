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
`;

export const ModalContent = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 280px;
  max-height: 90vh;
  background: ${props => props.theme.color.white};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all ${props => props.theme.transition.modal};
  overflow: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    min-width: 704px;
  }

  /* @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: 544px;
  } */
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 12px;
  color: ${props => props.theme.color.black};

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
  stroke: ${props => props.theme.color.accent};

  &:hover,
  &:focus {
    stroke: ${props => props.theme.color.secondaryYellow};
  }
`;
