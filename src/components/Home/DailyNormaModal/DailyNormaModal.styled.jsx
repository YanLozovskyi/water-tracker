import styled from '@emotion/styled';

export const BoxModal = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 24px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 704px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 592px;
  }
`;

export const Formula = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  span {
    color: ${({ theme }) => theme.color.accent};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleModal = styled.h3`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${({ theme }) => theme.color.black};
`;

export const Comment = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 24px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.secondaryPowderBlue};
  color: ${({ theme }) => theme.color.black};

  span {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const FormRadio = styled.form`
  gap: 16px;

  span {
    margin-right: 24px;
    font-size: 16px;
  }
`;

export const InputRadio = styled.input`
  opacity: 0;
  position: absolute;

  + span {
    display: inline-block;
    padding-left: 25px;
    position: relative;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.color.accent};
      background-color: ${({ theme }) => theme.color.white};
    }

    &:after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.accent};
      top: 50%;
      left: 4px;
      transform: translate(0, -50%);
      opacity: 0;
    }
  }

  &:checked + span:after {
    opacity: 1;
  }
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.color.secondaryPowderBlue};
  border-radius: 6px;
  display: flex;
  padding: 12px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  font-size: 16px;
  width: 100%;
  margin-top: 8px;
  color: ${({ theme }) => theme.color.secondaryLightBlue};
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

  &[type='number'] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const FormResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  strong {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.accent};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: block;
  }
`;

export const ButtonSave = styled.button`
  background-color: ${({ theme }) => theme.color.accent};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 18px;
  width: 100%;
  height: 44px;
  margin-left: auto;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: background-color ${({ theme }) => theme.transition.main};

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 160px;
  }
`;
