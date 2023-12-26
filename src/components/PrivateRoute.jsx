// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo = '/home' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = true;
  const isRefreshing = true;

  return !isLoggedIn && !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    <Component />
  );
};

export default PrivateRoute;
