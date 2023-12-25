import { useState } from 'react';
import { useEffect } from 'react';
import {
  SignUpContainer,
  EyeSlashIcon,
  SignStyledLabel,
  SignStyledInput,
  SignImgBubble,
  SignImgButle,
} from './SignUpForm.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';

export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [iconStatus, setIconStatus] = useState(false);

  const linkClick = e => {};
  useEffect(() => {
    validatePassword();
  }, [password]);

  useEffect(() => {
    validateConfirmPassword();
  }, [confirmPassword]);
  const validateEmail = () => {
    // console.log(email);
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('please enter a valid email address');
    } else {
      setEmailError('');
    }
  };
  const validatePassword = () => {
    if (password && password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };
  const validateConfirmPassword = () => {
    if (password && confirmPassword && confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
    validateEmail();
    // console.log(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
    validatePassword();
    // console.log(e.target.value);
  };
  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
    validateConfirmPassword();
    // console.log(e.target.value);
  };

  const iconClick = e => {
    iconStatus ? setIconStatus(false) : setIconStatus(true);
  };

  const buttonClick = e => {
    console.log('send request');
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
            <form>
              <div className="sign-up-form-container">
                <SignStyledLabel>
                  Enter your email
                  <SignStyledInput
                    className={emailError ? 'input-with-error' : null}
                    onChange={handleEmailChange}
                    placeholder="E-mail"
                    type="email"
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
                    onChange={handlePasswordChange}
                    autoComplete="off"
                    type={iconStatus ? 'text' : 'password'}
                    placeholder="Password"
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
                    onChange={handleConfirmPasswordChange}
                    autoComplete="off"
                    type={iconStatus ? 'text' : 'password'}
                    placeholder="Repeat password"
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
              </div>
            </form>
            <button
              onClick={buttonClick}
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
            <a
              onClick={linkClick}
              className="sign-up-link"
              href="./src/components/Home/DailyNorma/DailyNorma.jsx"
            >
              Sign in
            </a>
          </div>
        </div>
      </SignUpContainer>
    </>
  );
};
