import styled from '@emotion/styled';

export const HeaderWrap = styled.header`
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
  transition: all 0.5s linear;
`;

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
