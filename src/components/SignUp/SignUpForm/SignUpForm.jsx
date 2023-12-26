import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  EyeSlashIcon,
  SignImgBubble,
  SignImgButle,
  SignStyledInput,
  SignStyledLabel,
  SignUpContainer,
  SignUpLink
} from './SignUpForm.styled';
import { registerThunk } from '../../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [iconStatus, setIconStatus] = useState(false);

  const navigate = useNavigate();

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

  const validatePassword = (password) => {
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
    dispatch(registerThunk({ email, password })).then((data) => { if (!data.error) navigate('/signin'); });
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  const iconClick = e => {
    iconStatus ? setIconStatus(false) : setIconStatus(true);
  };

  const buttonDisabled = emailError || passwordError || confirmPasswordError;

  return (
    <>
      <picture>
        <SignImgBubble
          src="src/assets/images/background/homePage/desktop/bgHomeBubbleDesc.png"
          media="(max-width: 1440px)"
        ></SignImgBubble>
        <source
          srcSet="src/assets/images/background/homePage/tablet/bgHomeTabBubble.png"
          media="(max-width: 768px)"
        />
        <source
          srcSet="src/assets/images/background/homePage/mobile/bgHomePhoneBubble.png"
          media="(max-width: 480px)"
        />
      </picture>
      <picture>
        <SignImgButle
          src="src/assets/images/background/homePage/desktop/bgHomeButleDesc.png"
          media="(max-width: 1440px)"
        ></SignImgButle>
        <source
          srcSet="src/assets/images/background/homePage/tablet/bgHomeTabButle.png"
          media="(max-width: 768px)"
        />
        <source
          srcSet="src/assets/images/background/homePage/mobile/bgHomePhoneButle.png"
          media="(max-width: 480px)"
        />
      </picture>
      <SignUpContainer>
        <div className="sign-up-forms-container">
          <div className="adaptation-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="sign-up-form-container">
                <SignStyledLabel>
                  Enter your email
                  <SignStyledInput
                    className={emailError ? 'input-with-error' : null}
                    onChange={handleChange}
                    placeholder="E-mail"
                    type="email"
                    name='email'
                    value={email}
                  />
                  {emailError && (
                    <span className="sign-up-error-message">{emailError}</span>
                  )}
                </SignStyledLabel>
              </div>
              <div className="sign-up-form-container">
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
                  {passwordError && (
                    <span className="sign-up-error-message">
                      {passwordError}
                    </span>
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
              </div>
              <div className="sign-up-form-container">
                <SignStyledLabel>
                  Repeat password
                  <SignStyledInput
                    className={confirmPasswordError ? 'input-with-error' : null}
                    onChange={handleChange}
                    autoComplete="off"
                    type={iconStatus ? 'text' : 'password'}
                    placeholder="Repeat password"
                    name='confirmPassword'
                    value={confirmPassword}
                  />
                  {confirmPasswordError && (
                    <span className="sign-up-error-message">
                      {confirmPasswordError}
                    </span>
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
                <button
                  type="submit"
                  className={
                    buttonDisabled
                      ? 'sign-up-button sign-up-button-disabled'
                      : 'sign-up-button'
                  }
                  disabled={buttonDisabled}
                >
                  Sign Up
                </button>
              </div>
            </form>

            <SignUpLink
              to="/signin"
            >
              Sign in
            </SignUpLink>
          </div>
        </div>
      </SignUpContainer>
    </>
  );
};
