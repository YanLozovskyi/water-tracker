import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SignUpContainer = styled.div`
  width: 320px;
  height: 680px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 768px;
    height: 680px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 1404px;
    height: 582px;
  }

  .sign-up-forms-container {
    padding: 28px 20px 0px 20px;
    position: relative;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    .sign-up-forms-container {
      padding: 40px 368px 172px 32px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    .sign-up-forms-container {
      padding: 148px 198px 30px 822px;
    }
  }

  .adaptation-container {
    width: 280px;
    height: 396px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    .adaptation-container {
      width: 336px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    .adaptation-container {
      width: 384px;
      height: 404px;
    }
  }

  .sign-up-forms-container h2 {
    margin-bottom: 16px;
    width: 100%;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    color: ${props => props.theme.color.black};
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

  .sign-up-button-disabled {
    background-color: ${props => props.theme.color.secondaryPowderBlue};
  }

  .input-with-error {
    color: red;
    border: 1px solid ${props => props.theme.color.secondaryRed};
  }
  .sign-up-error-message {
    color: red;
  }
`;
export const SignStyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-bottom: 8px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${props => props.theme.color.black};
`;

export const SignStyledInput = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.color.secondaryPowderBlue};
  display: flex;
  padding: 12px 10px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 16px;

  &:focus-within {
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.color.secondaryLightBlue};
  }
`;

export const EyeSlashIcon = styled.svg`
  width: 16px;
  height: 16px;
  border: 1px;
  stroke: ${props => props.theme.color.accent};
  fill: ${props => props.theme.color.white};
  position: absolute;
  right: 10px;
  top: 38px;
`;

export const SignUpLink = styled(NavLink)`
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${props => props.theme.color.accent};
  &:hover {
    color: ${props => props.theme.color.secondaryYellow};
  }
`;
