import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '../../redux/theme/themeSelectors';
import { set } from '../../redux/theme/themeSlice';

export const TogglerTheme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(set(currentTheme));
  };

  return (
    <button type="button" onClick={handleOnClick}>
      theme
    </button>
  );
};
