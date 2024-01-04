import styled from '@emotion/styled';
export const ToggleContainer = styled.div`
  width: 60px;
  height: 30px;
  background-color: ${props => (props.active ? '#4caf50' : '#ccc')};
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => (props.active ? '#45a049' : '#bbb')};
  }
`;

export const ToggleHandle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: ${props => (props.active ? 'translateX(30px)' : 'translateX(0)')};
`;
