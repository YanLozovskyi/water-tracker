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
  background-color: rgba(240, 245, 255, 0.5);

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
  color: #2f2f2f;
  font-size: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
  }
`;

export const FooterBtn = styled.button`
  color: #2f2f2f;
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 20px;
    height: 20px;
  }
`;
