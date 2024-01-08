import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/options/optionsSelectors';
import { set } from '../../../redux/options/optionsSlice';
import {
  ToggleContainer,
  ToggleHandle,
  TogglerIcon,
} from './TogglerTheme.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';

export const TogglerTheme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const [isToggled, setToggle] = useState(false);

  const handleOnClick = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(set(currentTheme));
  };

  return (
    <ToggleContainer onClick={handleOnClick}>
      <ToggleHandle onClick={() => setToggle(!isToggled)}>
        {theme === 'light' && (
          <TogglerIcon>
            <use href={`${sprite}#icon-theme-light`}></use>
          </TogglerIcon>
        )}
        {theme === 'dark' && (
          <TogglerIcon>
            <use href={`${sprite}#icon-theme-dark`}></use>
          </TogglerIcon>
        )}
      </ToggleHandle>
    </ToggleContainer>
  );
};
