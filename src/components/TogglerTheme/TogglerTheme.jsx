import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '../../redux/theme/themeSelectors';
import { toggleTheme } from '../../redux/theme/themeSlice';

export const TogglerTheme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleOnClick = () => dispatch(toggleTheme());

  return (
    <button type="button" onClick={handleOnClick}>
      theme
    </button>
  );
};
