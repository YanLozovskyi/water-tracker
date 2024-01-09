import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/options/optionsSelectors';
import { set } from '../../../redux/options/optionsSlice';
import {
  ToggleContainer,
  TogglerIconLight,
  TogglerIconDark,
} from './TogglerTheme.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';

export const TogglerTheme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const [isToggled, setToggle] = useState(true);

  const handleOnClick = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(set(currentTheme));

    setToggle(!isToggled);
  };

  return (
    <ToggleContainer onClick={handleOnClick}>
      {theme === 'light' && (
        <TogglerIconLight>
          <use href={`${sprite}#icon-light`}></use>
        </TogglerIconLight>
      )}
      {theme === 'dark' && (
        <TogglerIconDark>
          <use href={`${sprite}#icon-dark`}></use>
        </TogglerIconDark>
      )}
    </ToggleContainer>
  );
};
