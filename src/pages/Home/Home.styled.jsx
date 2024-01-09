import styled from '@emotion/styled';

import { Section } from 'components';
import imgHomeDesk1x from '../../assets/images/background/homePage/desktop/bubbleDesk.png';
import imgHomeDesk2x from '../../assets/images/background/homePage/desktop/bubbleDesk@2x.png';
import imgHomeMob1x from '../../assets/images/background/homePage/mobile/bubbleMob.png';
import imgHomeMob2x from '../../assets/images/background/homePage/mobile/bubbleMob@2x.png';
import imgHomeTabl1x from '../../assets/images/background/homePage/tablet/bubbleTablet.png';
import imgHomeTabl2x from '../../assets/images/background/homePage/tablet/bubbleTablet@2x.png';

export const HomeSection = styled(Section)`
  background-position: center center;
  padding-top: 24px;
  padding-bottom: 24px;
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

export const BoxHome = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    display: flex;
    flex-direction: row;
  }
`;

export const HomeStatistics = styled.div`
  padding: 24px 8px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  background: ${props => props.theme.color.secondaryWhite};
  max-width: 280px;
  border-radius: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: 32px 24px;
    max-width: 704px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: 592px;
    flex-direction: row;
  }
`;
