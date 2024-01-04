import { Container, Logo, UserLogo, UserAuth } from 'components';
import { Toggle } from '../common/Toggle/Toggle';
import { ContainerHeader } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

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
