import { ContentLoader } from 'components';
import { ErrorMessage, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { reqPassThunk } from '../../redux/auth/authOperations';
import { selectIsLoading } from '../../redux/root/rootSelectors';
import { SignInLink } from '../SignIn/SignInForm/SignInForm.styled';
import {
  BootleImg,
  ErrorSpan,
  ErrorSvg,
  FormContainer,
  FormTitle,
  SignButton,
  SignForm,
  SignStyledInput,
  SignStyledLabel,
  SignUpContainer,
  SuccessSvg,
} from '../SignUp/SignUpForm/SignUpForm.styled';

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .matches(/^[^\s@]+@[^\s@]+.[^\s@]+$/, 'Email is not valid')
    .required('Email is required'),
});

export const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectIsLoading)


  return (
    <SignUpContainer>
      <BootleImg />
      <FormContainer>
        <FormTitle>Forgot password</FormTitle>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={(email, actions) => {
            dispatch(reqPassThunk(email));
            actions.resetForm({
              values: {
                email: '',
              },
            });
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
              <SignButton
                className={!isValid ? 'button-disabled' : null}
                type="submit"
              >
                Send {isLoading && <ContentLoader />}
              </SignButton>
            </SignForm>
          )}
        </Formik>
        <SignInLink to="/signin">Sign in</SignInLink>
      </FormContainer>
    </SignUpContainer>
  );
};
