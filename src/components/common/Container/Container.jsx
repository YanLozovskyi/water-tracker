import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 1440px;
    padding-right: 120px;
    padding-left: 120px;
  }
`;
