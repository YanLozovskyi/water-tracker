import { Container, Logo, UserAuth, UserLogo, TogglerTheme } from 'components';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { ContainerHeader } from './Header.styled';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Container>
        <ContainerHeader>
          <Logo />
          <TogglerTheme />
          {isLoggedIn ? <UserLogo /> : <UserAuth />}
        </ContainerHeader>
      </Container>
    </header>
  );
};
