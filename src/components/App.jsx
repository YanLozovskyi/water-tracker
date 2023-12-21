import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from '../pages/Welcome/Welcome';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import Loader from './common/Loader/Loader';

import SharedLayout from './SharedLayout';

const HomePage = lazy(() => import('../pages/Home/Home'));
const SigninPage = lazy(() => import('../pages/Signin/SignIn'));
const SignUpPage = lazy(() => import('../pages/SignUp/SignUp'));
const ErrorPage = lazy(() => import('../pages/Error/Error'));
const ForgotPassPage = lazy(() =>
  import('../pages/ForgotPasswordPage/ForgotPassword'),
);

const App = () => {
  const isRefreshing = false;

  return !isRefreshing ? (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute component={<WelcomePage />} redirectTo="/home" />
          }
        />
        <Route path="home" element={<PrivateRoute component={HomePage} />} />
        <Route
          path="signin"
          element={
            <RestrictedRoute component={<SigninPage />} redirectTo="/home" />
          }
        />
        <Route
          path="signup"
          element={
            <RestrictedRoute component={<SignUpPage />} redirectTo="/home" />
          }
        />
        <Route
          path="forgot-password"
          element={
            <RestrictedRoute
              component={<ForgotPassPage />}
              redirectTo="/signin"
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  ) : (
    <Loader />
  );
};

export default App;
