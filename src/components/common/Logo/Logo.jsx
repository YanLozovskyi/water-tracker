import { NavLink } from 'react-router-dom';
import logo from 'src/assets/images/Logo.png';
import { LogoImg } from './Logo.styled';
import { useState } from 'react';

export const Logo = () => {
  const [isAuthorized, setAuthorized] = useState(false);
  return (
    <div>
      {isAuthorized ? (
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
