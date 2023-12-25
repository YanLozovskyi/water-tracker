import styled from '@emotion/styled';

export const WelcomePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding-top: 24px;
  padding-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 60px;

    padding-top: 40px;
    padding-bottom: 50px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding-top: 80px;
    padding-bottom: 294px;
    gap: 81px;
    z-index: 100;
  }
`;
