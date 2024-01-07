import styled from '@emotion/styled';

export const WelcomePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 60px;
    align-items: stretch;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    gap: 81px;
  }
`;
