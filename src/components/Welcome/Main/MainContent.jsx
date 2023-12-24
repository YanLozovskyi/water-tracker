import { WaterConsumptionTracker, WhyDrinkWater } from 'components';
import { WelcomePageStyle, Background } from './MainContent.styled';

export const MainContent = () => {
  return (
    <Background>
      <WelcomePageStyle>
        <WaterConsumptionTracker />
        <WhyDrinkWater />
      </WelcomePageStyle>
    </Background>
  );
};
