import { ErrorMessage, Formik } from 'formik';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import sprite from 'src/assets/images/sprite/sprite.svg';
import * as Yup from 'yup';
import { reqPassThunk } from '../../redux/auth/authOperations';
import {
  BootleImg,
  ErrorSpan,
  // EyeSlashIcon,
  FormContainer,
  FormTitle,
  SignButton,
  SignForm,
  SignStyledInput,
  SignStyledLabel,
  SignUpContainer,
} from '../SignUp/SignUpForm/SignUpForm.styled';
import { SignInLink } from '../SignIn/SignInForm/SignInForm.styled';

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .matches(/^[^\s@]+@[^\s@]+.[^\s@]+$/, 'Email is not valid')
    .required('Email is required'),
});

export const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  // const [iconStatus, setIconStatus] = useState(false);

  // const iconClick = () => {
  // setIconStatus(!iconStatus);
  // };

  return (
    <SignUpContainer>
      <BootleImg />
      <FormContainer>
        <FormTitle>Forgot password</FormTitle>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={email => {
            dispatch(reqPassThunk(email));
          }}
        >
          {({ errors, isValid, handleReset }) => (
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
              <SignButton
                className={!isValid ? 'button-disabled' : null}
                type="submit"
                onSubmit={handleReset}
              >
                Send
              </SignButton>
            </SignForm>
          )}
        </Formik>
        <SignInLink to="/signin">Sign in</SignInLink>
      </FormContainer>
    </SignUpContainer>
  );
};
