import { ContentLoader } from 'components';
import { ErrorMessage, Formik } from 'formik';
import { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useDispatch, useSelector } from 'react-redux';
import sprite from 'src/assets/images/sprite/sprite.svg';
import * as Yup from 'yup';
import { logInThunk } from '../../../redux/auth/authOperations';
import { selectIsLoading } from '../../../redux/root/rootSelectors';
import {
  BootleImg,
  ErrorSpan,
  ErrorSvg,
  EyeSlashIcon,
  FormContainer,
  FormTitle,
  SignButton,
  SignForm,
  SignStyledInput,
  SignStyledLabel,
  SignUpContainer,
  SuccessSvg,
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
  const { isLoading } = useSelector(selectIsLoading)
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
          {({ errors, isValid, values }) => (
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
                {errors.email && values.email && <ErrorSvg />}
                {!errors.email && values.email && <SuccessSvg />}
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
                <PasswordStrengthBar
                  style={{ height: '8px' }}
                  scoreWordStyle={{ margin: '0px' }}
                  password={values.password}
                  minLength={8}
                />
              </SignStyledLabel>
              <SignButton
                className={!isValid ? 'button-disabled' : null}
                type="submit"
              >
                Sign In {isLoading && <ContentLoader />}
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
