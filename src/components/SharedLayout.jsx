import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Loader from './common/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
