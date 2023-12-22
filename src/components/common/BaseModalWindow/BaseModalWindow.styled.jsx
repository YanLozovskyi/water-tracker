import styled from '@emotion/styled';

export const BaseModalStyled = styled.div`
  display: inline-flex;
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

  .modal-content {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    background: ${props => props.theme.color.white};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    gap: 24px;
    padding: 32px 24px;
    margin: 0;
    transition: all ${props => props.theme.transition.modal};

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
      padding: 32px 12px;
      width: calc(100% - 20px);
    }

    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
      width: 704px;
    }
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.color.black};

    title {
      font-weight: 500;
      font-size: 26px;
      line-height: 1.2;
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  width: 24px;
  height: 24px;
  padding: 0;

  a {
    stroke: ${props => props.theme.color.accent};
    color: ${props => props.theme.color.accent};
  }
  svg {
    width: 100%;
    height: 100%;
    background: yellow;
    stroke: ${props => props.theme.color.accent};
    fill: ${props => props.theme.color.accent};
  }

  /* &:hover {
    color: ${props => props.theme.color.accent};
  } */
`;
