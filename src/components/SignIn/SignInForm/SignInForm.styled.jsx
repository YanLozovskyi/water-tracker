import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SignInLink = styled(NavLink)`
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${props => props.theme.color.accent};
  &:hover {
    color: ${props => props.theme.color.secondaryYellow};
  }
`;
