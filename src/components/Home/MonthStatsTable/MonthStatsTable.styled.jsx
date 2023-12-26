import styled from '@emotion/styled';

// export const BoxMonth = styled.div`
//   padding-left: 8px;
//   padding-right: 8px;
//   padding-bottom: 24px;
//   padding-top: 24px;
//   box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
//   background: ${props => props.theme.color.secondaryWhite};
//   max-width: 280px;

//   @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
//     padding-left: 24px;
//     padding-right: 24px;
//     padding-bottom: 32px;
//     max-width: 704px;
//   }

//   @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
//     max-width: 592px;
//   }
// `;

export const HeaderMonth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
    color: ${props => props.theme.color.black};
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
  color: ${props =>
    props.active
      ? props.theme.color.accent
      : props.theme.color.secondaryLightBlue};

  &:hover {
    color: ${props => props.theme.color.accent};
  }
`;

export const Paginator = styled.div`
  display: flex;
  align-items: baseline;
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
  font-size: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 12px;
  }
`;

export const DaysList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    column-gap: 34px;
    row-gap: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    column-gap: 20px;
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
  color: ${props => props.theme.color.secondaryLightBlue};

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
  background-color: ${props => props.theme.color.white};
  border: 1px solid
    ${props =>
      props.isHighlighted
        ? props.theme.color.secondaryYellow
        : props.theme.color.white};
  color: ${props => props.theme.color.black};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
    padding: 7px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  }
`;
