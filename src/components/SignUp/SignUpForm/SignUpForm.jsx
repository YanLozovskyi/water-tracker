import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { registerThunk } from '../../../redux/auth/authOperations';
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
} from './SignUpForm.styled';

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [iconStatus, setIconStatus] = useState(false);

  useEffect(() => {
    validatePassword(password);
  }, [password]);

  useEffect(() => {
    validateConfirmPassword(confirmPassword, password);
  }, [confirmPassword, password]);

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

  const validateConfirmPassword = (confirmPassword, password) => {
    if (password && confirmPassword && confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
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
      case 'confirmPassword':
        setConfirmPassword(value);
        validateConfirmPassword();
        return;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerThunk({ email, password }))
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const iconClick = () => {
    iconStatus ? setIconStatus(false) : setIconStatus(true);
  };

  const buttonDisabled = emailError || passwordError || confirmPasswordError;

  return (
    <>
      <SignUpContainer>
        <BootleImg />
        <SignForm onSubmit={handleSubmit}>
          <FormTitle>Sign Up</FormTitle>
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

          <SignStyledLabel>
            Repeat password
            <SignStyledInput
              className={confirmPasswordError ? 'input-with-error' : null}
              onChange={handleChange}
              autoComplete="off"
              type={iconStatus ? 'text' : 'password'}
              placeholder="Repeat password"
              name="confirmPassword"
              value={confirmPassword}
            />
            {confirmPasswordError && (
              <ErrorSpan>{confirmPasswordError}</ErrorSpan>
            )}
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
              SignUp
            </SignButtonDisabled>
          ) : (
            <SignButton type="submit" disabled={buttonDisabled}>
              SignUp
            </SignButton>
          )}
          <SignUpLink to="/signin">Sign in</SignUpLink>
        </SignForm>
      </SignUpContainer>
    </>
  );
};
