import { MainContent } from 'components';
import { WelcomeStyle, Container } from './Welcome.styled';

const Welcome = () => {
  return (
    <Container>
      <WelcomeStyle>
        <MainContent />
      </WelcomeStyle>
    </Container>
  );
};

export default Welcome;
