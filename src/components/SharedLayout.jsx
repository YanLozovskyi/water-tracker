import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader, Header } from 'components';
import { MainWrap } from './SharedLayout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SharedLayout = () => {
  return (
    <>
      <Header />
      <MainWrap>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainWrap>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default SharedLayout;
