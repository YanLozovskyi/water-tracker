import styled from '@emotion/styled';
export const SignUpContainer = styled.div`
  width: 1404px;
  height: 582px;
  top: 52px;
  left: 18px;

  .sign-up-forms-container {
    padding: 148px 198px 30px 822px;
  }

  .sign-up-forms-container h2 {
    margin-bottom: 16px;
    width: 384px;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    color: ${props => props.theme.color.black};
  }

  .sign-up-form-container label {
    display: block;
    width: 384px;
    margin-bottom: 8px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: ${props => props.theme.color.black};
  }
  .sign-up-form-container input {
    width: 384px;
    border-radius: 6px;
    border: 1px solid ${props => props.theme.color.secondaryPowderBlue};
    display: flex;
    padding: 12px 10px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    color: ${props => props.theme.color.secondaryLightBlue};
    margin-bottom: 16px;
  }
  .sign-up-form-container input::placeholder {
    color: ${props => props.theme.color.secondaryLightBlue};
  }
  .sign-up-button {
    width: 100%;
    padding: 10px 30px 10px 30px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    text-align: center;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.accent};
    margin-bottom: 16px;
  }
  .sign-up-link {
    width: 384px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: ${props => props.theme.color.accent};
    &:hover {
      color: ${props => props.theme.color.secondaryYellow};
    }
  }
`;
