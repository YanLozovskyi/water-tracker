import { Container, Logo, UserAuth, UserLogo, Toggle } from 'components';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { ContainerHeader, HeaderWrap } from './Header.styled';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderWrap>
      <Container>
        <ContainerHeader>
          <Logo />
          <Toggle />
          {isLoggedIn ? <UserLogo /> : <UserAuth />}
        </ContainerHeader>
      </Container>
    </HeaderWrap>
  );
};
