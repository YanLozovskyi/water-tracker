import { Container, Logo, UserAuth, UserLogo, TogglerTheme } from 'components';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { ContainerHeader, WrapHeader } from './Header.styled';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Container>
        <ContainerHeader>
          <Logo />
          <WrapHeader>
            <TogglerTheme />
            {isLoggedIn ? <UserLogo /> : <UserAuth />}
          </WrapHeader>
        </ContainerHeader>
      </Container>
    </header>
  );
};
