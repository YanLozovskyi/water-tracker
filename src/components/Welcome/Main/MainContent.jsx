import { WaterConsumptionTracker, WhyDrinkWater } from 'components';
import { WelcomePageStyle } from './MainContent.styled';

export const MainContent = () => {
  return (
    <WelcomePageStyle>
      <WaterConsumptionTracker />
      <WhyDrinkWater />
    </WelcomePageStyle>
  );
};
