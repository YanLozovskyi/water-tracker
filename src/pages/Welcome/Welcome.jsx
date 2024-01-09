import { MainContent } from 'components';
import { Container, WelcomeStyle } from './Welcome.styled';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/auth/authSlice';
import { refreshUserThunk } from '../../redux/auth/authOperations';

const Welcome = () => {
  const dispatch = useDispatch();
  const searchParam = useSearchParams();
  const token = searchParam[0].get('token');
  console.log(searchParam);
  console.log(searchParam[0]);
  console.log(searchParam[0].get('token'));
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      try {
        dispatch(setToken(token));
        dispatch(refreshUserThunk()).then(data => {
          if (!data.error) navigate('/home');
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [dispatch, navigate, token]);

  return (
    <WelcomeStyle>
      <Container>
        <MainContent />
      </Container>
    </WelcomeStyle>
  );
};

export default Welcome;
