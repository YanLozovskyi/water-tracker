import styled from '@emotion/styled';

import { Section } from 'components';
import imgHomeDesk1x from '../../assets/images/background/homePage/desktop/bubbleDesk.png';
import imgHomeDesk2x from '../../assets/images/background/homePage/desktop/bubbleDesk@2x.png';
import imgHomeMob1x from '../../assets/images/background/homePage/mobile/bubbleMob.png';
import imgHomeMob2x from '../../assets/images/background/homePage/mobile/bubbleMob@2x.png';
import imgHomeTabl1x from '../../assets/images/background/homePage/tablet/bubbleTablet.png';
import imgHomeTabl2x from '../../assets/images/background/homePage/tablet/bubbleTablet@2x.png';
import imgBottleDesk1x from '../../assets/images/background/homePage/desktop/bottleDesc.png';
import imgBottleDesk2x from '../../assets/images/background/homePage/desktop/bottleDesc@2x.png';
import imgBottleMob1x from '../../assets/images/background/homePage/mobile/bottleMob.png';
import imgBottleMob2x from '../../assets/images/background/homePage/mobile/bottleMob@2x.png';
import imgBottleTab1x from '../../assets/images/background/homePage/tablet/bottleTabl.png';
import imgBottleTab2x from '../../assets/images/background/homePage/tablet/bottleTabl@2x.png';

export const SignUpSection = styled(Section)`
  background-position: center;
  background-image: -webkit-image-set(
    url(${imgHomeMob1x}) 1x,
    url(${imgHomeMob2x}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${imgHomeTabl1x}) 1x,
      url(${imgHomeTabl2x}) 2x
    );
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${imgHomeDesk1x}) 1x,
      url(${imgHomeDesk2x}) 2x
    );
  }
`;

export const SignUpBox = styled.div`
  background-image: -webkit-image-set(
    url(${imgBottleMob1x}) 1x,
    url(${imgBottleMob2x}) 2x
  );
  background-repeat: no-repeat;
  width: 280px;
  height: 210px;
  position: absolute;
  top: 500px;
  left: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${imgBottleTab1x}) 1x,
      url(${imgBottleTab2x}) 2x
    );
    width: 736px;
    height: 548px;
    top: 116px;
    left: 300px;
  }
   @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${imgBottleDesk1x}) 1x,
      url(${imgBottleDesk2x}) 2x
    );
    width: 916px;
height: 680px;
  left: 20px;
`;
