import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader, Header, Footer } from 'components';
import { Wrapper } from './Footer/Footer.styled';

const SharedLayout = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </Wrapper>
    </>
  );
};

export default SharedLayout;
