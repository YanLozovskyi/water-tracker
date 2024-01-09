import styled from '@emotion/styled';

import { Section } from 'components';
import imgHomeDesk1x from '../../assets/images/background/homePage/desktop/bubbleDesk.png';
import imgHomeDesk2x from '../../assets/images/background/homePage/desktop/bubbleDesk@2x.png';
import imgHomeMob1x from '../../assets/images/background/homePage/mobile/bubbleMob.png';
import imgHomeMob2x from '../../assets/images/background/homePage/mobile/bubbleMob@2x.png';
import imgHomeTabl1x from '../../assets/images/background/homePage/tablet/bubbleTablet.png';
import imgHomeTabl2x from '../../assets/images/background/homePage/tablet/bubbleTablet@2x.png';

export const SignInSection = styled(Section)`
  padding-top: 40px;
  background-position: center center;
  background-image: -webkit-image-set(
    url(${imgHomeMob1x}) 1x,
    url(${imgHomeMob2x}) 2x
  );
  background-size: cover;
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
