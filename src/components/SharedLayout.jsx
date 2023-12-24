import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader, Header } from 'components';

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
