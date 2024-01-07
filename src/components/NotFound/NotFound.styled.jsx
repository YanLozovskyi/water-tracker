import styled from '@emotion/styled';

export const ErrorBtn = styled.button`
  background-color: ${({ theme }) => theme.color.accent};
  color: ${props => props.theme.color.white};
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 18px;
  height: 44px;
  margin-left: auto;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: background-color ${({ theme }) => theme.transition.main};

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
  }
`;

export const ErrorImg = styled.img`
  font-size: 16px;
  width: 280px;
  height: 280px;
  margin: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 18px;
    width: 600px;
    height: 500px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 900px;
    height: 700px;
  }
`;
