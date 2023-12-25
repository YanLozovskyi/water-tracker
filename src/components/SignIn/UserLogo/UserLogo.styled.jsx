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
  margin: 0;
`;

export const UserAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export const UserDefaultAvatar = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #9ebbff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
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
