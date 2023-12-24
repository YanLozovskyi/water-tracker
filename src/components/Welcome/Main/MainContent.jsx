import { WaterConsumptionTracker } from '../WaterConsumptionTracker/WaterConsumptionTracker';
import { WhyDrinkWater } from '../WhyDrinkWater/WhyDrinkWater';
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
