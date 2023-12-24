import styled from '@emotion/styled';

export const BoxModal = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 32px;
`;

export const Formula = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 12px;

  span {
    color: ${props => props.theme.color.accent};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleModal = styled.h3`
  margin-bottom: 16px;
  color: ${props => props.theme.color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 8px;
  color: ${props => props.theme.color.black};
`;

export const Comment = styled.p`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 24px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.color.secondaryPowderBlue};
  color: ${props => props.theme.color.black};

  span {
    color: ${props => props.theme.color.accent};
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
  border: 1px solid ${props => props.theme.color.accent};
  width: 14px;
  height: 14px;
  margin-right: 8px;
  color: ${props => props.theme.color.accent};

  span {
    margin-right: 10px;
  }
`;

export const Input = styled.input`
  border: 1px solid ${props => props.theme.color.secondaryPowderBlue};
  border-radius: 6px;
  display: flex;
  padding: 12px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  font-size: 16px;
  width: 100%;
  color: ${props => props.theme.color.secondaryLightBlue};

  &:hover {
    background-color: ${props => props.theme.color.secondaryPowderBlue};
  }
`;

export const ButtonSave = styled.button`
  background-color: ${props => props.theme.color.accent};
  color: ${props => props.theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 18px;
  width: 160px;
  height: 44px;
  margin-left: auto;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: background-color ${props => props.theme.transition.main};

  &:hover {
    background-color: ${props => props.theme.color.secondaryPowderBlue};
  }
`;
