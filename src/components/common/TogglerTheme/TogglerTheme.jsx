import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/options/optionsSelectors';
import { set } from '../../../redux/options/optionsSlice';
import { ToggleContainer, ToggleHandle } from './TogglerTheme.styled';

export const TogglerTheme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const [isToggled, setToggle] = useState(false);

  const handleOnClick = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(set(currentTheme));
  };

  return (
    <div onClick={handleOnClick}>
      <ToggleContainer active={isToggled} onClick={() => setToggle(!isToggled)}>
        <ToggleHandle active={isToggled} />
      </ToggleContainer>
    </div>
  );
};
