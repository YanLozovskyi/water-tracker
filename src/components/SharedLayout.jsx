import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader, Header } from 'components';
import { MainWrap } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <MainWrap>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainWrap>
    </>
  );
};

export default SharedLayout;
