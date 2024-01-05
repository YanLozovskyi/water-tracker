import { useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../styles';
import { selectTheme } from '../../redux/theme/themeSelectors';
import { useState, useEffect } from 'react';

export const Theme = ({ children }) => {
  const { lightTheme, darkTheme } = theme;

  const [themeState, setThemeState] = useState(lightTheme);

  const currentTheme = useSelector(selectTheme);

  useEffect(() => {
    setThemeState(currentTheme === 'light' ? lightTheme : darkTheme);
  }, [currentTheme, darkTheme, lightTheme]);

  return <ThemeProvider theme={themeState}>{children}</ThemeProvider>;
};
