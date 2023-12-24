import { useState } from 'react';
import { Container, Logo, UserLogo, UserAuth } from 'components';
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
