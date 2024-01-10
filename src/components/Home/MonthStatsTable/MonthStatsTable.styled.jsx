import styled from '@emotion/styled';

export const HeaderMonth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
    color: ${({ theme }) => theme.color.black};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-bottom: 24px;

    h2 {
      font-size: 26px;
      line-height: 1.2;
    }
  }
`;

export const ButtonPaginator = styled.button`
  width: 14px;
  height: 14px;
  background: transparent;
  color: ${({ active, theme }) =>
    active ? theme.color.accent : theme.color.secondaryLightBlue};

  &:hover {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const Paginator = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;
  color: ${({ theme }) => theme.color.accent};
  column-gap: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;

export const Year = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
  font-size: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 12px;
  }
`;

export const DaysList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 50px);
  justify-content: space-between;
  gap: 16px;
  height: 446px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 50px);
    gap: 20px;
    height: 268px;
  }
`;

export const DaysPercentage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.secondaryLightBlue};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 12px;
  }
`;

export const DaysButton = styled.button`
  padding: 7px 6px;
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid
    ${({ theme, isHighlighted }) =>
      isHighlighted ? theme.color.secondaryYellow : theme.color.white};
  color: ${({ theme }) => theme.color.black};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    padding: 7px;
  }

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
