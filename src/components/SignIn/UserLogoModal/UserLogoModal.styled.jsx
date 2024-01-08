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

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    top: 34px;
  }
`;

export const IconSettings = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.accent};
  font-size: 16px;
  line-height: 1.25;
  border: none;
  background-color: transparent;
  padding: 0;
  transition: color ${({ theme }) => theme.transition.main};

  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.color.secondaryYellow};
  }

  &:is(:hover, :focus) svg {
    stroke: ${({ theme }) => theme.color.secondaryYellow};
  }
`;

export const StyledListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const UserLogoModalWrap = styled.div`
  position: relative;
  z-index: 1;
`;
