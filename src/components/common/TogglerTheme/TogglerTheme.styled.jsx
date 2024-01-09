import styled from '@emotion/styled';

export const ToggleContainer = styled.div`
  width: 70px;
  height: 28px;
  border-radius: 16px;
  padding: 0px;
  background: ${({ theme }) => theme.color.themeColor};
`;

export const TogglerIconLight = styled.svg`
  width: 14px;
  height: 26px;
  animation: togglerLight 2s linear;
  transform-origin: center right;
  margin-left: 10px;

  @keyframes togglerLight {
    0% {
      transform: translateX(35px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const TogglerIconDark = styled.svg`
  width: 16px;
  height: 28px;
  animation: togglerDark 2s linear;
  transform-origin: center left;
  margin-left: 40px;

  @keyframes togglerDark {
    0% {
      transform: translateX(-35px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
