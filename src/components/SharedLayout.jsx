import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Loader, Header } from 'components';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
