import { NavLink } from 'react-router-dom';
import logo from 'src/assets/images/Logo.png';
import { LogoImg } from './Logo.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/authSelectors';

export const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <NavLink to="/home">
          <LogoImg src={logo} alt="logo" />
        </NavLink>
      ) : (
        <NavLink to="/">
          <LogoImg src={logo} alt="logo" />
        </NavLink>
      )}
    </div>
  );
};
