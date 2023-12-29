import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? (
    <Navigate to={redirectTo} />
  ) : (
    <Component />
  );
};

export default PrivateRoute;
