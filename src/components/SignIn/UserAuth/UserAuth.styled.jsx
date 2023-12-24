import styled from '@emotion/styled';

export const UserAuthBtn = styled.button`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33em;
  background-color: transparent;
  color: ${({ theme }) => theme.color.accent};

  &:hover,
  &:focus {
    color: ${props => props.theme.color.secondaryYellow};
  }
`;

export const SignInIcon = styled.svg`
  margin-left: 8px;
  width: 28px;
  height: 28px;
  stroke: ${({ theme }) => theme.color.black};
  fill: transparent;
`;
