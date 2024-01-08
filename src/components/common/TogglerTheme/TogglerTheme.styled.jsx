import styled from '@emotion/styled';

export const ToggleContainer = styled.div`
  width: 70px;
  height: 24px;
  border-radius: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 70px;
    height: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 80px;
    height: 28px;
  }
`;

export const ToggleHandle = styled.div`
  width: 70px;
  height: 24px;
  border-radius: 16px;
  padding: 0;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.boxShadowforButton.normalButton};

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowforButton.hoverButton};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 70px;
    height: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 80px;
    height: 28px;
  }
`;

export const TogglerIcon = styled.svg`
  width: 70px;
  height: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 70px;
    height: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 80px;
    height: 28px;
  }
`;
