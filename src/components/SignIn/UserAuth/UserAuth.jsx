import { NavLink } from 'react-router-dom';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { SignInIcon } from './UserAuth.styled';

export const UserAuth = () => {
  return (
    <div>
      <NavLink to="/signin">
        Sign in
        <SignInIcon>
          <use href={`${sprite}#icon-user`}></use>
        </SignInIcon>
      </NavLink>
    </div>
  );
};
