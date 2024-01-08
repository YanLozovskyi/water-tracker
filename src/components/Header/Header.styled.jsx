import styled from '@emotion/styled';

export const ContainerHeader = styled.div`
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

export const WrapHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 14px;
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    gap: 20px;
  }
`;
