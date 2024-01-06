import { Container, Logo, UserAuth, UserLogo } from 'components';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { ContainerHeader, HeaderWrap } from './Header.styled';
import { TogglerTheme } from '../togglerTheme/togglerTheme';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderWrap>
      <Container>
        <ContainerHeader>
          <Logo />
          <TogglerTheme />
          {isLoggedIn ? <UserLogo /> : <UserAuth />}
        </ContainerHeader>
      </Container>
    </HeaderWrap>
  );
};
