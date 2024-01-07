import { MainContent } from 'components';
import { Container, WelcomeStyle } from './Welcome.styled';

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
