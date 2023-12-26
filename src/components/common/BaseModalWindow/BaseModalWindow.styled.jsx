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

  @media (min-width: ${props => props.theme.breakpoint.mobile}) {
    overflow-y: scroll;
  }

  .modal-content {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 544px;
    max-height: 648px;
    background: ${props => props.theme.color.white};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all ${props => props.theme.transition.modal};

    @media (min-width: ${props => props.theme.breakpoint.mobile}) {
      width: calc(100% - 20px);
    }

    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
      max-width: 704px;
    }

    /* @media (min-width: ${props => props.theme.breakpoint.desktop}) {
      max-width: 1008px;
    } */
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 32px;
    color: ${props => props.theme.color.black};

    /* @media (min-width: ${props => props.theme.breakpoint.tablet}) {
      padding-left: 24px;
      padding-right: 24px;
    } */

    h2 {
      font-weight: 500;
      font-size: 26px;
      line-height: 1.2;
    }
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
  stroke: ${props => props.theme.color.secondaryLightBlue};
`;
