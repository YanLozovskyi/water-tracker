import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import noFound from 'src/assets/images/notFound.png';
import { ErrorBtn, ErrorImg } from './NotFound.styled';

const TIMEOUT_REDIRECT = 20000;

export const NotFound = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.href = '/';
    }, TIMEOUT_REDIRECT);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <NavLink to="/">
        <ErrorBtn type="button">Go back to Welcome page</ErrorBtn>
      </NavLink>
      <ErrorImg src={noFound} alt="notFound" />
    </>
  );
};
