import styled from '@emotion/styled';
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

export const GenderText = styled(FormText)`
  margin-bottom: 12px;
`;

export const RadioBtn = styled.input`
  border: 1px solid ${props => props.theme.color.accent};
  width: 14px;
  height: 14px;
  color: ${props => props.theme.color.accent};
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

export const Input = styled.input`
  width: 256px;
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
`;
