import styled from '@emotion/styled';

import imgHome2Mob1x from '../../../assets/images/background/homePage/mobile/bottleMob.png';
import imgHome2Mob2x from '../../../assets/images/background/homePage/mobile/bottleMob@2x.png';
import imgHome2Tabl1x from '../../../assets/images/background/homePage/tablet/bottleTabl.png';
import imgHome2Tabl2x from '../../../assets/images/background/homePage/tablet/bottleTabl@2x.png';
import imgHome2Desk1x from '../../../assets/images/background/homePage/desktop/bottleDesc.png';
import imgHome2Desk2x from '../../../assets/images/background/homePage/desktop/bottleDesc@2x.png';

export const DailyBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
`;

export const BackgroundHome = styled.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${imgHome2Mob1x}) 1x,
    url(${imgHome2Mob2x}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${imgHome2Tabl1x}) 1x,
      url(${imgHome2Tabl2x}) 2x
    );
    height: 386px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${imgHome2Desk1x}) 1x,
      url(${imgHome2Desk2x}) 2x
    );
    width: 592px;
    height: 548px;
  }
`;

export const DailyNormaStyled = styled.div`
  padding: 8px 20px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.color.secondaryWhite};
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  background: ${props => props.theme.color.white};
  max-width: 172px;

  div {
    display: flex;
    gap: 12px;
    margin: 0 auto;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    color: ${props => props.theme.color.black};
    margin-bottom: 16px;
  }

  p {
    font-size: 22px;
    font-weight: 700;
    line-height: 1;
    color: ${props => props.theme.color.accent};
  }

  button {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    color: ${props => props.theme.color.accent};
    background: transparent;

    &:hover,
    &:focus {
      color: ${props => props.theme.color.secondaryYellow};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    position: absolute;
    top: 13%;
    left: 12%;
    transform: translate(-50%, -50%);
    z-index: 1;

    p {
      font-size: 24px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    top: 20%;
    left: 14%;
    max-width: 180px;
  }
`;
