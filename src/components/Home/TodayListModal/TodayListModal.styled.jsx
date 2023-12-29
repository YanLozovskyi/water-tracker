import styled from '@emotion/styled';
import { setLocale } from 'yup';

export const BoxAddModal = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 16px;
    color: ${props => props.theme.color.black};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }
`;

export const AddParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${props => props.theme.color.black};
  margin-bottom: 12px;
`;

export const AddWater = styled.div`
  margin-bottom: 24px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input {
    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    border: none;
    background: ${props => props.theme.color.secondaryPowderBlue};
    color: ${props => props.theme.color.accent};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
    width: 92px;
    height: 36px;
  }
`;

export const ButtonMl = styled.button`
  background-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.accent};
  border-radius: 30px;
  border: 1px solid ${props => props.theme.color.secondaryLightBlue};
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 4px;
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);

  &:hover &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${props => props.theme.color.accent};
`;

export const AddTime = styled.div`
  margin-bottom: 24px;
`;

export const Input = styled.input`
  color: ${props => props.theme.color.accent};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 100%;
  display: flex;
  padding: 12px 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.color.secondaryPowderBlue};
`;

export const FooterModal = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 24px;
  margin-top: 24px;

  span {
    color: ${props => props.theme.color.accent};
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }
`;

export const AddButtonSave = styled.button`
  background-color: ${props => props.theme.color.accent};
  color: ${props => props.theme.color.white};
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 18px;
  width: 100%;
  height: 44px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: background-color ${props => props.theme.transition.main};

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 160px;
  }
`;
