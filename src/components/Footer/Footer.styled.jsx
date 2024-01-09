import styled from '@emotion/styled';

// export const Wrapper = styled.div`
/* min-height: 100vh; */
/* display: flex; */
/* flex-direction: column; */
/* justify-content: space-between; */
/* position: relative; */
// `;

export const FooterBox = styled.footer`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.color.footerBackgroundColor};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  /* position: absolute; */
  bottom: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    height: 52px;
  }
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
  }
`;

export const FooterBtn = styled.button`
  color: ${({ theme }) => theme.color.black};
  font-size: 12px;
  background-color: transparent;
  padding: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
  }

  &:hover {
    color: #407bff;
  }
`;

export const IconHeart = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  transform: scale(3);
  animation: pulse 1.2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.95);
    }

    70% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(0.95);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 20px;
    height: 20px;
  }
`;
