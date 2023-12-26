import styled from '@emotion/styled';

export const TodayWrapper = styled.div`
  margin-bottom: 24px;
`;

export const TodayItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
  border-bottom: 1px solid #d7e3ff;
`;

export const TodayInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const TodayTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: #2f2f2f;
  margin-bottom: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const TodayList = styled.ul`
  height: 212px;
  overflow: auto;
`;

export const TodayVolume = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: #407bff;
  margin-right: 16px;
`;

export const TodayTime = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  color: #2f2f2f;
`;

export const IconGlass = styled.svg`
  stroke: #407bff;
  fill: transparent;
  width: 26px;
  height: 26px;
  margin-right: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 36px;
    height: 36px;
  }
`;

export const TodayTools = styled.div`
  display: flex;
  gap: 18px;
`;

export const ButtonChange = styled.button`
  background-color: transparent;
  padding: 0;
  width: 20px;
  height: 20px;

  & svg {
    stroke: #9ebbff;
    fill: transparent;
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-bottom: 1px solid #9ebbff;
  }
`;

export const ButtonDelete = styled.button`
  background-color: transparent;
  padding: 0;
  width: 20px;
  height: 20px;

  & svg {
    stroke: #ef5050;
    fill: transparent;
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-bottom: 1px solid #ef5050;
  }
`;

export const AddWaterBtn = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.color.accent};
  border: none;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  stroke: ${props => props.theme.color.accent};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 18px;
    line-height: 1.33;
  }

  & svg {
    width: 24px;
    height: 24px;
    fill: transparent;
  }

  &:hover {
    color: #ff9d43;
    stroke: #ff9d43;
  }
`;
