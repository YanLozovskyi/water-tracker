import { NavLink } from 'react-router-dom';
import logo from 'src/assets/images/Logo.png';

export const Logo = () => {
  return (
    <div>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
    </div>
  );
};
