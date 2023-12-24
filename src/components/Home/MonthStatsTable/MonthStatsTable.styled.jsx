import styled from '@emotion/styled';

export const BoxMonth = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
  padding-top: 24px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  background: ${props => props.theme.color.secondaryWhite};
  max-width: 592px;
`;

export const HeaderMonth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.2;
    color: ${props => props.theme.color.black};
  }
`;

export const ButtonPaginator = styled.button`
  width: 14px;
  height: 14px;
  background: transparent;
`;

export const IconPaginator = styled.svg`
  width: 100%;
  height: 100%;
  stroke: ${props => props.theme.color.accent};
`;

export const Paginator = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  color: ${props => props.theme.color.accent};
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
  font-size: 12px;
`;

export const DaysList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  column-gap: 22px;
  gap: 20px;
`;

export const DaysPercentage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => props.theme.color.secondaryLightBlue};
`;

export const DaysButton = styled.button`
  padding: 7px;
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  background-color: ${props => props.theme.color.white};
  border: 1px solid
    ${props =>
      props.isHighlighted
        ? props.theme.color.secondaryYellow
        : props.theme.color.white};
  color: ${props => props.theme.color.black};
`;
