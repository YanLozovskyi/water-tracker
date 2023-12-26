import styled from '@emotion/styled';
import {
  ModalContent,
  ModalHeader,
} from '../../common/BaseModalWindow/BaseModalWindow.styled';
export const HiddenInput = styled.input`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  white-space: nowrap;
  clip-path: inset(100%);
`;

export const FormText = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`;

export const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.black};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`;

export const DownloadWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const IconDownload = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  stroke: ${({ theme }) => theme.color.accent};
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const IconBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`;

export const PasswordInputWrap = styled.div`
  position: relative;
  margin-top: 8px;
`;

export const PasswordIcon = styled(IconDownload)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const DownloadBtn = styled.button`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  border: none;
  background-color: transparent;
  padding: 0;
`;

export const DownloadBtnText = styled.span`
  color: ${({ theme }) => theme.color.accent};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;

export const FormField = styled.div`
  margin-bottom: 24px;
`;

export const PasswordFormField = styled.div`
  margin-bottom: 12px;
`;

export const GenderText = styled(FormText)`
  margin-bottom: 12px;
`;

export const RadioBtn = styled.input`
  border: 1px solid ${props => props.theme.color.accent};
  width: 14px;
  height: 14px;

  &:checked {
    color: ${props => props.theme.color.accent};
  }
`;

export const RadioBtnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const RadioBtnText = styled.span`
  margin-left: 8px;
  color: ${({ theme }) => theme.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`;

export const RadioBtnLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 60%;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.secondaryLightBlue};
  color: ${({ theme }) => theme.color.secondaryLightBlue};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  outline: transparent; /* 125% */

  &:focus {
    color: ${({ theme }) => theme.color.accent};
  }

  &::placeholder {
    color: ${props => props.theme.color.secondaryLightBlue};
  }
`;

export const ModalWrap = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 32px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};

  @media (min-width: ${props => props.theme.breakpoint.tablet}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const PasswordText = styled(FormText)`
  margin-bottom: 12px;
`;

export const PasswordLabel = styled.label`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.black};
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25; /* 125% */
`;

export const SaveBtn = styled.button`
  display: block;
  min-width: 100%;
  padding: 8px 30px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.accent};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  transition: box-shadow ${props => props.theme.transition.main};

  &:is(:hover, :focus) {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media (min-width: ${props => props.theme.breakpoint.tablet}) {
    margin-left: auto;
    min-width: 160px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 24px; /* 133.333% */
  }
`;

export const DesktopFormWrap = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
`;

export const DesktopPasswordWrap = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 392px;
  }
`;

export const LastFormField = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-bottom: 0px;
  }
`;

export const GenderFormField = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-bottom: 52px;
  }
`;

export const SettingModalContent = styled(ModalContent)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: 1008px;
  }
`;

// export const SettingModalHeader = styled(ModalHeader)`

// `;
