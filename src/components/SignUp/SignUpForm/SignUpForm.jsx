import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import {
  SignUpContainer,
  EyeSlashIcon,
  SignStyledLabel,
  SignStyledInput,
  SignImgBubble,
  SignImgButle,
} from './SignUpForm.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';

const ValidationInput = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Enter a valid Email';
    toast.error('Email must contain the "@" symbol');
  }

  if (!values.password) {
    errors.password = 'This field is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'This field is required';
  } else if (values.confirmPassword.length < 8) {
    errors.confirmPassword = 'Password must be at least 8 characters long';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
    toast.error('Please, enter correct password');
  }

  return errors;
};

export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [iconStatus, setIconStatus] = useState(false);
  // console.log(iconStatus);

  const handleInputChange = e => {
    console.log('inputChange');
  };

  const iconClick = e => {
    iconStatus ? setIconStatus(false) : setIconStatus(true);
    console.log('click');
    console.log(iconStatus);
  };

  const buttonClick = e => {
    console.log('clickMyBut');
  };

  const linkClick = e => {
    console.log('clickMyLink');
  };

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
          <div className="aboba">
            <h2>Sign Up</h2>
            <form>
              <div className="sign-up-form-container">
                <SignStyledLabel>
                  Enter your email
                  <SignStyledInput
                    onChange={handleInputChange}
                    placeholder="E-mail"
                    type="email"
                  />
                </SignStyledLabel>
              </div>
              <div className="sign-up-form-container">
                <SignStyledLabel>
                  Enter your password
                  <SignStyledInput
                    onChange={handleInputChange}
                    autoComplete="off"
                    type={iconStatus ? 'text' : 'password'}
                    placeholder="Password"
                  />
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
                    onChange={handleInputChange}
                    autoComplete="off"
                    type={iconStatus ? 'text' : 'password'}
                    placeholder="Repeat password"
                  />
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
              type="button"
              className="sign-up-button"
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
