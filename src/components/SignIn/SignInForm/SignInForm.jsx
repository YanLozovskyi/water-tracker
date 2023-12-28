import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  BootleImg,
  ErrorSpan,
  EyeSlashIcon,
  FormTitle,
  SignButton,
  SignButtonDisabled,
  SignForm,
  SignStyledInput,
  SignStyledLabel,
  SignUpContainer,
  SignUpLink,
} from '../../SignUp/SignUpForm/SignUpForm.styled';
import { logInThunk } from '../../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import { SignInLink } from './SignInForm.styled';

export const SignInForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [iconStatus, setIconStatus] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    validatePassword(password);
  }, [password]);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = password => {
    if (password && password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        validateEmail();
        return;
      case 'password':
        setPassword(value);
        validatePassword();
        return;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logInThunk({ email, password })).then(data => {
      if (!data.error) navigate('/home');
    });
    setEmail('');
    setPassword('');
  };

  const iconClick = e => {
    iconStatus ? setIconStatus(false) : setIconStatus(true);
  };

  const buttonDisabled = emailError || passwordError;

  return (
    <SignUpContainer>
      <BootleImg />
      <SignForm onSubmit={handleSubmit}>
        <FormTitle>Sign In</FormTitle>
        <SignStyledLabel>
          Enter your email
          <SignStyledInput
            onChange={handleChange}
            className={emailError ? 'input-with-error' : null}
            placeholder="E-mail"
            type="email"
            name="email"
            value={email}
          />
          {emailError && <ErrorSpan>{emailError}</ErrorSpan>}
        </SignStyledLabel>
        <SignStyledLabel>
          Enter your password
          <SignStyledInput
            className={passwordError ? 'input-with-error' : null}
            onChange={handleChange}
            autoComplete="off"
            type={iconStatus ? 'text' : 'password'}
            placeholder="Password"
            name="password"
            value={password}
          />
          {passwordError && <ErrorSpan>{passwordError}</ErrorSpan>}
          {iconStatus === false ? (
            <EyeSlashIcon onClick={iconClick}>
              <use href={`${sprite}#icon-to-hide`}></use>
            </EyeSlashIcon>
          ) : (
            <EyeSlashIcon onClick={iconClick}>
              <use href={`${sprite}#icon-to-open`}></use>
            </EyeSlashIcon>
          )}
        </SignStyledLabel>
        {buttonDisabled ? (
          <SignButtonDisabled type="submit" disabled={buttonDisabled}>
            SignIn
          </SignButtonDisabled>
        ) : (
          <SignButton type="submit" disabled={buttonDisabled}>
            SignIn
          </SignButton>
        )}
        <SignInLink to="/signup">Sign up</SignInLink>
      </SignForm>
    </SignUpContainer>
  );
};
