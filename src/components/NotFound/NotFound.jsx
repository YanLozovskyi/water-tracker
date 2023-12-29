import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import noFound from 'src/assets/images/notFound.png';
import { ErrorBtn, ErrorImg, ErrorWrap } from './NotFound.styled';

export const NotFound = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.href = '/';
    }, 30000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ErrorWrap>
      <NavLink to="/">
        <ErrorBtn type="button">Go back to Welcome page</ErrorBtn>
      </NavLink>
      <ErrorImg src={noFound} alt="notFound" />
    </ErrorWrap>
  );
};
