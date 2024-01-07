import { ContentLoader } from 'components';
import { ErrorMessage, Formik } from 'formik';
import { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import sprite from 'src/assets/images/sprite/sprite.svg';
import * as Yup from 'yup';
import { resPassThunk } from '../../redux/auth/authOperations';
import { selectIsLoading } from '../../redux/root/rootSelectors';
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
} from '../SignUp/SignUpForm/SignUpForm.styled';

const validationSchema = Yup.object({
  newPassword: Yup.string()
    .required('Password is required')
    .min(8, 'Your password is too short.')
    .matches(/[a-zA-Z]/, 'Password should contain at least one Latin letters.'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Password must match!')
    .required('Confirm password is reqired!'),
});

export const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectIsLoading)

  const searchParam = useSearchParams();
  const resetToken = searchParam[0].get('resetToken');
  const navigate = useNavigate();
  const [iconStatus, setIconStatus] = useState(false);

  const iconClick = () => {
    setIconStatus(!iconStatus);
  };

  const handleSubmit = ({ newPassword }) => {
    dispatch(resPassThunk({ resetToken, newPassword })).then(data => {
      if (!data.error) navigate('/signin');
    });
  };

  return (
    <SignUpContainer>
      <BootleImg />
      <FormContainer>
        <FormTitle>Forgot Password</FormTitle>
        <Formik
          initialValues={{
            newPassword: '',
            confirmNewPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, values, isValid }) => (
            <SignForm>
              <SignStyledLabel>
                Enter a new password
                <SignStyledInput
                  className={errors.newPassword ? 'input-with-error' : null}
                  type={iconStatus ? 'text' : 'password'}
                  name="newPassword"
                  placeholder="Enter a new password"
                />
                <ErrorMessage name="newPassword" component={ErrorSpan} />
                {iconStatus === false ? (
                  <EyeSlashIcon onClick={iconClick}>
                    <use href={`${sprite}#icon-to-hide`}></use>
                  </EyeSlashIcon>
                ) : (
                  <EyeSlashIcon onClick={iconClick}>
                    <use href={`${sprite}#icon-to-open`}></use>
                  </EyeSlashIcon>
                )}
                <PasswordStrengthBar
                  password={values.newPassword}
                  scoreWordStyle={{ margin: '0' }}
                />
              </SignStyledLabel>
              <SignStyledLabel>
                Repeat New Password
                <SignStyledInput
                  className={
                    errors.confirmNewPassword ? 'input-with-error' : null
                  }
                  type={iconStatus ? 'text' : 'password'}
                  name="confirmNewPassword"
                  placeholder="Repeat new password"
                />
                <ErrorMessage name="confirmNewPassword" component={ErrorSpan} />
                {iconStatus === false ? (
                  <EyeSlashIcon onClick={iconClick}>
                    <use href={`${sprite}#icon-to-hide`}></use>
                  </EyeSlashIcon>
                ) : (
                  <EyeSlashIcon onClick={iconClick}>
                    <use href={`${sprite}#icon-to-open`}></use>
                  </EyeSlashIcon>
                )}
                <PasswordStrengthBar
                  password={values.confirmNewPassword}
                  scoreWordStyle={{ margin: '0' }}
                />
              </SignStyledLabel>
              <SignButton
                className={!isValid ? 'button-disabled' : null}
                type="submit"
              >
                Change password {isLoading && <ContentLoader />}
              </SignButton>
            </SignForm>
          )}
        </Formik>
      </FormContainer>
    </SignUpContainer>
  );
};
