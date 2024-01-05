import { ErrorMessage, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import sprite from 'src/assets/images/sprite/sprite.svg';
import * as Yup from 'yup';
import { logInThunk } from '../../../redux/auth/authOperations';
import {
  BootleImg,
  ErrorSpan,
  EyeSlashIcon,
  FormContainer,
  FormTitle,
  SignButton,
  SignForm,
  SignStyledInput,
  SignStyledLabel,
  SignUpContainer,
} from '../../SignUp/SignUpForm/SignUpForm.styled';
import { SignInLink } from './SignInForm.styled';

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .matches(/^[^\s@]+@[^\s@]+.[^\s@]+$/, 'Email is not valid')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short.'),
});

export const SignInForm = () => {
  const dispatch = useDispatch();
  const [iconStatus, setIconStatus] = useState(false);

  const iconClick = () => {
    setIconStatus(!iconStatus);
  };

  return (
    <SignUpContainer>
      <BootleImg />
      <FormContainer>
        <FormTitle>Sign In</FormTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={({ email, password }) => {
            dispatch(logInThunk({ email, password }));
          }}
        >
          {({ errors, isValid }) => (
            <SignForm>
              <SignStyledLabel>
                Enter your email
                <SignStyledInput
                  className={errors.email ? 'input-with-error' : null}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                />
                <ErrorMessage name="email" component={ErrorSpan} />
              </SignStyledLabel>
              <SignStyledLabel>
                Enter your password
                <SignStyledInput
                  className={errors.password ? 'input-with-error' : null}
                  type={iconStatus ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component={ErrorSpan} />
                {!iconStatus ? (
                  <EyeSlashIcon onClick={iconClick}>
                    <use href={`${sprite}#icon-to-hide`}></use>
                  </EyeSlashIcon>
                ) : (
                  <EyeSlashIcon onClick={iconClick}>
                    <use href={`${sprite}#icon-to-open`}></use>
                  </EyeSlashIcon>
                )}
              </SignStyledLabel>
              <SignButton
                className={!isValid ? 'button-disabled' : null}
                type="submit"
              >
                Sign In
              </SignButton>
            </SignForm>
          )}
        </Formik>
        <SignInLink to="/signup">Sign up</SignInLink>
        <SignInLink to="/forgot-password">I forgot password</SignInLink>
      </FormContainer>
    </SignUpContainer>
  );
};
