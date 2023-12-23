import styled from '@emotion/styled';

export const UserLogoBtn = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const UserModalIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.color.accent};
  fill: transparent;

  &:hover,
  &:focus {
    color: ${props => props.theme.color.accent};
  }
`;
