import { ErrorMessage, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import sprite from 'src/assets/images/sprite/sprite.svg';
import * as Yup from 'yup';
import { registerThunk } from '../../../redux/auth/authOperations';
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
  SignUpLink,
} from './SignUpForm.styled';

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .matches(/^[^\s@]+@[^\s@]+.[^\s@]+$/, 'Email is not valid')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short.')
    .matches(/[a-zA-Z]/, 'Password should contain at least one Latin letters.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match!')
    .required('Confirm password is reqired!'),
});

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const [iconStatus, setIconStatus] = useState(false);

  const iconClick = () => {
    setIconStatus(!iconStatus);
  };

  return (
    <SignUpContainer>
      <BootleImg />
      <FormContainer>
        <FormTitle>Sign Up</FormTitle>
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={({ email, password }) => {
            dispatch(registerThunk({ email, password }));
          }}
        >
          {formik => (
            <SignForm>
              <SignStyledLabel>
                Enter your email
                <SignStyledInput
                  className={formik.errors.email ? 'input-with-error' : null}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                />
                <ErrorMessage name="email" component={ErrorSpan} />
              </SignStyledLabel>
              <SignStyledLabel>
                Enter your password
                <SignStyledInput
                  className={formik.errors.password ? 'input-with-error' : null}
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
              <SignStyledLabel>
                Repeat Password
                <SignStyledInput
                  className={
                    formik.errors.confirmPassword ? 'input-with-error' : null
                  }
                  type={iconStatus ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Repeat password"
                />
                <ErrorMessage name="confirmPassword" component={ErrorSpan} />
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
              <SignButton
                className={!formik.isValid ? 'button-disabled' : null}
                type="submit"
              >
                Sign Up
              </SignButton>
            </SignForm>
          )}
        </Formik>
        <SignUpLink to="/signin">Sign In</SignUpLink>
      </FormContainer>
    </SignUpContainer>
  );
};
