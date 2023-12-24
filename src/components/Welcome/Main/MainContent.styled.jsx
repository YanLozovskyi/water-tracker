import styled from '@emotion/styled';

import imgMob1x from '../../../assets/images/background/WelcomePage/mob/bg_mob_1x.png';
import imgMob2x from '../../../assets/images/background/WelcomePage/mob/bg_mob_2x.png';
import imgTab1x from '../../../assets/images/background/WelcomePage/tab/bg_tab_1x.png';
import imgTab2x from '../../../assets/images/background/WelcomePage/tab/bg_tab_2x.png';
import imgDesk1x from '../../../assets/images/background/WelcomePage/desktop/bg_img_1x.png';
import imgDesk2x from '../../../assets/images/background/WelcomePage/desktop/bg_img_2x.png';
import imgDesk1x_before from '../../../assets/images/background/WelcomePage/desktop/bg_img_1x_bubbles.png';
import imgDesk2x_before from '../../../assets/images/background/WelcomePage/desktop/bg_img_2x_bubbles.png';

export const WelcomePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 20px 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    gap: 60px;
    padding: 40px 32px 50px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding-top: 80px;
    padding-bottom: 294px;
    gap: 81px;
  }
`;

export const Background = styled.div`
  background-position: center bottom;
  background-image: -webkit-image-set(url(${imgMob1x}) 1x, url(${imgMob2x}) 2x);
  background-size: cover;
  background-repeat: no-repeat;
 

  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${imgTab1x}) 1x,
      url(${imgTab2x}) 2x
    );
    background-size: contain;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${imgDesk1x}) 1x,
      url(${imgDesk2x}) 2x
    );
    background-size: contain;

    &::before {
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: -webkit-image-set(
        url(${imgDesk1x_before}) 1x,
        url(${imgDesk2x_before}) 2x
      );
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;
