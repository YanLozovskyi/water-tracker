import styled from '@emotion/styled';

export const UserAuthBtn = styled.button`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33em;
  background-color: transparent;
  padding: 0px;
  color: ${({ theme }) => theme.color.accent};

  &:hover,
  &:focus {
    color: ${props => props.theme.color.secondaryYellow};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
    line-height: 1.25em;
  }
`;

export const SignInIcon = styled.svg`
  margin-left: 8px;
  width: 28px;
  height: 28px;
  stroke: ${({ theme }) => theme.color.black};
  fill: transparent;
`;
