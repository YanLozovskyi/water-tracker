import styled from '@emotion/styled';

export const SignInIcon = styled.svg`
  width: 28px;
  height: 28px;
  stroke: ${({ theme }) => theme.color.black};
  fill: transparent;

  &:hover,
  &:focus {
    color: ${props => props.theme.color.accent};
  }
`;
