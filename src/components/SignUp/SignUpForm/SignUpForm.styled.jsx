import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import imgHome2Mob1x from '../../../assets/images/background/homePage/mobile/bottleMob.png';
import imgHome2Mob2x from '../../../assets/images/background/homePage/mobile/bottleMob@2x.png';
import imgHome2Tabl1x from '../../../assets/images/background/homePage/tablet/bottleTabl.png';
import imgHome2Tabl2x from '../../../assets/images/background/homePage/tablet/bottleTabl@2x.png';
import imgHome2Desk1x from '../../../assets/images/background/homePage/desktop/bottleDesc.png';
import imgHome2Desk2x from '../../../assets/images/background/homePage/desktop/bottleDesc@2x.png';

// export const SignImgBubble = styled.img`
//   position: absolute;
//   background-size: cover;
//   background-position: center;
//   width: 1404px;
//   height: 582px;
//   pointer-events: none;
//   @media (max-width: 768px) {
//     width: 768px;
//     height: 680px;
//   }
//   @media (max-width: 480px) {
//     width: 320px;
//     height: 842px;
//     display: inline-flex;
//     padding-bottom: 2.302px;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }
// `;

// export const SignImgButle = styled.img`
//   position: absolute;
//   width: 916px;
//   height: 680px;
//   pointer-events: none;
//   @media (max-width: 768px) {
//     width: 736px;
//     height: 548px;
//     margin-top: 52px;
//     margin-left: 112px;
//   }
//   @media (max-width: 480px) {
//     width: 280px;
//     height: 210px;
//     margin-top: 394px;
//     margin-left: 20px;
//   }
// `;

export const BootleImg = styled.div`
  background-position: -120px center;
  background-image: -webkit-image-set(
    url(${imgHome2Mob1x}) 1x,
    url(${imgHome2Mob2x}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 916px;
  min-height: 680px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${imgHome2Tabl1x}) 1x,
      url(${imgHome2Tabl2x}) 2x
    );
    width: 736px;
    height: 548px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${imgHome2Desk1x}) 1x,
      url(${imgHome2Desk2x}) 2x
    );
    width: 916px;
    min-height: 680px;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* width: 1404px;
  height: 582px;
  top: 52px;
  left: 18px;

  .sign-up-forms-container {
    padding: 148px 198px 30px 822px;
  }
  @media (max-width: 768px) {
    .sign-up-forms-container {
      padding: 40px 368px 172px 32px;
    }
  }
  @media (max-width: 480px) {
    .sign-up-forms-container {
      padding: 28px 20px 476px 20px;
    }
  }
  .adaptation-container {
    width: 384px;
    height: 404px;
  }

  @media (max-width: 768px) {
    .adaptation-container {
      width: 336px;
    }
  }

  @media (max-width: 480px) {
    .adaptation-container {
      width: 280px;
      height: 396px;
    }
  }

 
  */
`;

export const ErrorSpan = styled.span`
  color: red;
`;

export const SignButton = styled.button`
  width: 100%;
  padding: 10px 30px 10px 30px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  text-align: center;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.accent};
`;

export const SignStyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 8px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${props => props.theme.color.black};

  .input-with-error {
    color: red;
    border: 1px solid ${props => props.theme.color.secondaryRed};
  }
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

  &:focus-within {
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.color.secondaryLightBlue};
  }
`;

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  min-height: 304px;
  gap: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    min-width: 336px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    min-width: 384px;
    min-height: 312px;
    gap: 16px;
  }
`;

export const SignButtonDisabled = styled(SignButton)`
  background-color: ${props => props.theme.color.secondaryPowderBlue};
  cursor: not-allowed;
`;

export const FormTitle = styled.h2`
  width: 100%;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: ${props => props.theme.color.black};
`;

export const EyeSlashIcon = styled.svg`
  width: 16px;
  height: 16px;
  border: 1px;
  stroke: ${props => props.theme.color.accent};
  fill: ${props => props.theme.color.white};
  position: absolute;
  right: 10px;
  top: 44px;
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
