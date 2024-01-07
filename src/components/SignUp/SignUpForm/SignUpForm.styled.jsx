import styled from '@emotion/styled';

import { Field, Form } from 'formik';
import { FcHighPriority, FcOk } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import imgHome2Desk1x from '../../../assets/images/background/homePage/desktop/bottleDesc.png';
import imgHome2Desk2x from '../../../assets/images/background/homePage/desktop/bottleDesc@2x.png';
import imgHome2Mob1x from '../../../assets/images/background/homePage/mobile/bottleMob.png';
import imgHome2Mob2x from '../../../assets/images/background/homePage/mobile/bottleMob@2x.png';

export const BootleImg = styled.div`
  background-image: -webkit-image-set(
    url(${imgHome2Mob1x}) 1x,
    url(${imgHome2Mob2x}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  height: 210px;
  background-position: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    position: relative;
    background-image: -webkit-image-set(
      url(${imgHome2Desk1x}) 1x,
      url(${imgHome2Desk2x}) 2x
    );
    width: 736px;
    height: 548px;
    background-position: 120px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-position: -120px center;
    width: 916px;
    min-height: 680px;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 66px;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row-reverse;
    align-items: flex-start;
    gap: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }
`;

export const ErrorSpan = styled.span`
  color: red;
`;

export const SignButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  padding: 8px 30px 8px 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.accent};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 10px 30px 10px 30px;
  }
`;

export const SignStyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 8px;
  font-size: 18px;
  font-style: normal;
  line-height: 24px;
  color: ${({ theme }) => theme.color.black};

  .input-with-error {
    color: red;
    border: 1px solid ${({ theme }) => theme.color.secondaryRed};
  }
`;

export const SignStyledInput = styled(Field)`
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.secondaryPowderBlue};
  display: flex;
  padding: 12px 10px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  &:focus-within {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.secondaryLightBlue};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

export const SignForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .button-disabled {
    background-color: ${({ theme }) => theme.color.secondaryPowderBlue};
    cursor: not-allowed;
  }
`;

export const FormTitle = styled.h2`
  width: 100%;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: ${({ theme }) => theme.color.black};
`;

export const EyeSlashIcon = styled.svg`
  width: 16px;
  height: 16px;
  border: 1px;
  stroke: ${({ theme }) => theme.color.accent};
  fill: ${({ theme }) => theme.color.white};
  position: absolute;
  right: 10px;
  top: 46px;
`;

export const SignUpLink = styled(NavLink)`
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.accent};
  
  &:hover {
    color: ${({ theme }) => theme.color.secondaryYellow};
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 280px;
  min-height: 304px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    position: absolute;
    top: 104px;
    left: 30px;
    z-index: 1;
    min-width: 336px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    position: static;
    min-width: 384px;
    min-height: 312px;
  }
`;

export const ErrorSvg = styled(FcHighPriority)`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 46px;
  right: 10px;
`;

export const SuccessSvg = styled(FcOk)`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 46px;
  right: 10px;
`;
