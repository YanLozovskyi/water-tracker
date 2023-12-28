import styled from '@emotion/styled';

export const ModalTitle = styled.h2`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px; /* 111.111% */
`;

export const LogOutBtn = styled.button`
  display: block;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.secondaryRed};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  transition: box-shadow ${props => props.theme.transition.main};

  &:is(:hover, :focus) {
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 8px 30px;
    min-width: 100%;
    height: 36px;
    font-size: 16px;
    line-height: 20px; /* 125% */
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 10px 30px;
    min-width: 160px;
    height: 44px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const CancelBtn = styled.button`
  display: block;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.secondaryLightBlue};
  color: ${({ theme }) => theme.color.accent};
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  transition: box-shadow ${props => props.theme.transition.main};

  &:is(:hover, :focus) {
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    padding: 8px 30px;
    min-width: 100%;
    height: 36px;
    font-size: 16px;
    line-height: 20px; /* 125% */
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 10px 30px;
    min-width: 160px;
    height: 44px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
    justify-content: end;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    justify-content: start;
  }
`;

export const ModalWrap = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
`;
