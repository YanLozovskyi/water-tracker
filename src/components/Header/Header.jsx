import { useState } from 'react';
import { UserAuth } from '../SignIn/UserAuth/UserAuth';
import { UserLogo } from '../SignIn/UserLogo/UserLogo';
import { Container } from '../common/Container/Container';
import { Logo } from '../common/Logo/Logo';
import { ContainerHeader } from './Header.styled';

export const Header = () => {
  const [isAuthorized, setAuthorized] = useState(true);
  return (
    <Container>
      <ContainerHeader>
        <Logo />
        {isAuthorized ? <UserLogo /> : <UserAuth />}
      </ContainerHeader>
    </Container>
  );
};
