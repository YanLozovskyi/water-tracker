import { Container, Logo, UserAuth, UserLogo } from 'components';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { Toggle } from '../common/Toggle/Toggle';
import { ContainerHeader } from './Header.styled';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Container>
        <ContainerHeader>
          <Logo />
          <Toggle />

          {isLoggedIn ? <UserLogo /> : <UserAuth />}
        </ContainerHeader>
      </Container>
    </header>
  );
};
