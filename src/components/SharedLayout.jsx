import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader, Header } from 'components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default SharedLayout;
