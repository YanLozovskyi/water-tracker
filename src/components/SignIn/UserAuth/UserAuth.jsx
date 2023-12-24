import sprite from 'src/assets/images/sprite/sprite.svg';
import { NavLink } from 'react-router-dom';
import { SignInIcon, UserAuthBtn } from './UserAuth.styled';

export const UserAuth = () => {
  return (
    <div>
      <NavLink to="/signin">
        <UserAuthBtn type="button">
          Sign in
          <SignInIcon>
            <use href={`${sprite}#icon-user`}></use>
          </SignInIcon>
        </UserAuthBtn>
      </NavLink>
    </div>
  );
};
