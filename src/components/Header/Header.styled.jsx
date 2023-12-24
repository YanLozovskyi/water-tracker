import styled from '@emotion/styled';

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding-top: 8px;
  }
`;
