import styled from '@emotion/styled';
import { Section } from '../../components/common/Section/Section.jsx';

import imgMob1x from '../../assets/images/background/WelcomePage/mob/bg_mob_1x.png';
import imgMob2x from '../../assets/images/background/WelcomePage/mob/bg_mob_2x.png';
import imgTab1x from '../../assets/images/background/WelcomePage/tab/bg_tab_1x.png';
import imgTab2x from '../../assets/images/background/WelcomePage/tab/bg_tab_2x.png';
import imgDesk1x from '../../assets/images/background/WelcomePage/desktop/bg_img_1x.png';
import imgDesk2x from '../../assets/images/background/WelcomePage/desktop/bg_img_2x.png';
import imgDesk1x_before from '../../assets/images/background/WelcomePage/desktop/bg_img_1x_bubbles.png';
import imgDesk2x_before from '../../assets/images/background/WelcomePage/desktop/bg_img_2x_bubbles.png';

export const WelcomeStyle = styled.div`
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: calc(100vh - 109px);

  background-image: -webkit-image-set(url(${imgMob1x}) 1x, url(${imgMob2x}) 2x);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${imgTab1x}) 1x,
      url(${imgTab2x}) 2x
    );
    min-height: calc(100vh - 109px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${imgDesk1x}) 1x,
      url(${imgDesk2x}) 2x
    );
    min-height: calc(100vh - 109px);
  }
`;

export const Container = styled(Section)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding-top: 24px;
  padding-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 40px;
    padding-bottom: 50px;
    background-image: -webkit-image-set(
      url(${imgDesk1x_before}) 1x,
      url(${imgDesk2x_before}) 2x
    );
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding-top: 49px;
    padding-bottom: 109px;
    background-image: -webkit-image-set(
      url(${imgDesk1x_before}) 1x,
      url(${imgDesk2x_before}) 2x
    );
  }
`;
