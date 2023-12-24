import styled from '@emotion/styled';

export const DailyBox = styled.div`
  padding: 8px 20px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.color.secondaryWhite};
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  background: ${props => props.theme.color.white};
  max-width: 200px;

  div {
    display: flex;
    gap: 12px;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    color: ${props => props.theme.color.black};
    margin-bottom: 16px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    color: ${props => props.theme.color.accent};
  }

  button {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    color: #8baeff;
    background: transparent;
  }
`;
