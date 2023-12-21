import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/home' }) => {
  const isLoggedIn = true;
  const isRefreshing = true;

  return !isLoggedIn && !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    <Component />
  );
};

export default PrivateRoute;
