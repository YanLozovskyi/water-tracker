import styled from '@emotion/styled';

export const BoxAddModal = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.color.black};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    min-width: 704px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    min-width: 592px;
  }
`;

export const PreviousInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  gap: 12px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.secondaryWhite};
  width: 254px;
  margin-bottom: 24px;
`;

export const AddParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 12px;
`;

export const AddWater = styled.div`
  margin-bottom: 24px;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Water = styled.p`
  color: ${({ theme }) => theme.color.accent};
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  width: 92px;
  height: 36px;
`;

export const Label = styled.div`
  border-radius: 40px;
  background: ${({ theme }) => theme.color.secondaryPowderBlue};
  padding-left: 10px;
  padding-right: 16px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ButtonMl = styled.button`
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.accent};
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.color.secondaryLightBlue};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 4px;
  box-shadow: ${({ theme }) => theme.boxShadowforButton.normalButton};

  &:hover &:focus {
    box-shadow: ${({ theme }) => theme.boxShadowforButton.hoverButton};
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.color.accent};
`;

export const AddTime = styled.div`
  margin-bottom: 24px;
`;

export const InputTime = styled.input`
  color: ${({ theme }) => theme.color.accent};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 100%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.secondaryPowderBlue};
  background-color: ${({ theme }) => theme.color.white};

  &::placeholder {
    color: ${({ theme }) => theme.color.secondaryLightBlue};
  }

  &:hover {
    color: ${({ theme }) => theme.color.accent};
    border: 1px solid ${({ theme }) => theme.color.accent};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.accent};
  }

  &:not(:placeholder-shown) {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.color.accent};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 100%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.secondaryPowderBlue};
  background-color: ${({ theme }) => theme.color.white};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.secondaryLightBlue};
  }

  &:hover {
    color: ${({ theme }) => theme.color.accent};
    border: 1px solid ${({ theme }) => theme.color.accent};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.accent};
  }

  &:not(:placeholder-shown) {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const FooterModal = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  span {
    color: ${({ theme }) => theme.color.accent};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
  }
`;

export const AddButtonSave = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: ${({ theme }) => theme.color.accent};
  color: #fff;
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 18px;
  width: 100%;
  height: 44px;
  box-shadow: ${({ theme }) => theme.boxShadowforButton.normalButton};
  transition: background-color ${({ theme }) => theme.transition.main};

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowforButton.hoverButton};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 160px;
  }
`;
