import { UserAuth } from '../SignIn/UserAuth/UserAuth';
import { UserLogo } from '../SignIn/UserLogo/UserLogo';

import { Logo } from '../common/Logo/Logo';
import { ContainerHeader } from './Header.styled';

export const Header = () => {
  return (
    <ContainerHeader>
      <Logo />
      <UserAuth />
      <UserLogo />
    </ContainerHeader>
  );
};
