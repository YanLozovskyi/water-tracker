import styled from '@emotion/styled';

export const StyledLogoModal = styled.div`
  position: absolute;
  z-index: 1;
  left: -120px;
  top: 32px;
  width: 118px;
  padding: 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
  transition: all ${props => props.theme.transition.modal};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    top: 34px;
  }
`;

export const IconSettings = styled.svg`
  margin-right: 8px;
  fill: none;
  stroke: ${({ theme }) => theme.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const StyledBtn = styled.button`
  color: ${({ theme }) => theme.color.accent};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  border: none;
  background-color: transparent;
  padding: 0;
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const UserLogoModalWrap = styled.div`
  position: relative;
  margin-bottom: 6px;
`;
