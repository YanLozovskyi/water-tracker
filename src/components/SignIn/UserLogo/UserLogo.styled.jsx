import styled from '@emotion/styled';

export const UserLogoBtn = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33em;
`;

export const UserAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
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
