import { BaseModalWindow } from 'components';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from 'src/assets/images/sprite/sprite.svg';
import * as Yup from 'yup';
import defaultAvatar from '../../../assets/images/default_avatar_to_download.jpg';
import {
  updateAvatarThunk,
  editUserInfoThunk,
} from '../../../redux/auth/authOperations';
import { selectUser } from '../../../redux/auth/authSelectors';
import {
  Avatar,
  DesktopFormWrap,
  DesktopPasswordWrap,
  DownloadBtn,
  DownloadBtnText,
  DownloadWrap,
  FormField,
  FormText,
  GenderFormField,
  GenderText,
  IconBtn,
  IconDownload,
  Input,
  LastFormField,
  ModalWrap,
  PasswordFormField,
  PasswordIcon,
  PasswordInputWrap,
  PasswordLabel,
  PasswordText,
  RadioBtn,
  RadioBtnLabel,
  RadioBtnText,
  RadioBtnWrap,
  SaveBtn,
  StyledErrorMessage,
  StyledErrorText,
  StyledLabel,
} from './SettingModal.styled';

const settingFormValidationSchema = Yup.object().shape({
  gender: Yup.string(),
  name: Yup.string()
    .min(3, 'Username must be more then 3 characters long')
    .max(32, 'Username must be less then 32 characters long'),
  email: Yup.string().email('Invalid email'),
  newPassword: Yup.string()
    .min(8, 'New password must be at least 8 characters long')
    .max(64, 'New password must be less then 64 characters long')
    .nullable()
    .test(
      'isNewPasswordDifferent',
      'New password should be different from the old one',
      (value, schema) => !value || value !== schema.parent.outdatedPassword,
    ),
  outdatedPassword: Yup.string()
    .min(8, 'Old password must be at least 8 characters long')
    .max(64, 'Old password must be less then 64 characters long')
    .when('newPassword', (newPassword, field) =>
      newPassword[0] ? field.required('Please enter old password') : field,
    ),
  repeatedPassword: Yup.string().test(
    'isRepeatedPasswordValueMatched',
    'The entered password should match the new one',
    (value, schema) => !value || value === schema.parent.newPassword,
  ),
});

export const SettingModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { avatarURL, email, name, gender } = useSelector(selectUser);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const initialValues = {
    gender: gender || '',
    name: name || '',
    email: email || '',
    outdatedPassword: '',
    newPassword: '',
    repeatedPassword: '',
  };

  const handleSubmit = (values, actions) => {
    const { gender, name, email, outdatedPassword, newPassword } = values;

    const formData = {
      gender,
      name,
      email,
      outdatedPassword,
      newPassword,
    };
    // console.log('formData', formData);

    const dataSend = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        dataSend[key] = value;
      }
    });

    // console.log('dataSend', dataSend);

    dispatch(editUserInfoThunk(dataSend));
    actions.resetForm();
  };

  const handlePasswordVisibility = () => {
    setIsPasswordShown(previsPasswordShown => !previsPasswordShown);
  };

  const handleAvatarDownload = e => {
    let formData = new FormData();
    formData.append('avatar', e.target.files[0]);

    dispatch(updateAvatarThunk(formData));
  };

  return (
    <>
      <BaseModalWindow onClose={onClose} title="Setting">
        <ModalWrap>
          {
            <Formik
              initialValues={initialValues}
              validationSchema={settingFormValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched }) => (
                <Form>
                  <FormField>
                    <FormText>Your photo</FormText>
                    <DownloadWrap>
                      {
                        <Avatar
                          src={avatarURL ? avatarURL : defaultAvatar}
                          alt="user avatar"
                          width="80px"
                          height="80px"
                        />
                      }
                      <DownloadBtn>
                        <Field
                          type="file"
                          name="avatar"
                          hidden
                          accept="image/png, image/jpeg"
                          onChange={handleAvatarDownload}
                        />
                        <IconDownload>
                          <use href={`${sprite}#icon-arrow-up`}></use>
                        </IconDownload>
                        <DownloadBtnText>Upload a photo</DownloadBtnText>
                      </DownloadBtn>
                    </DownloadWrap>
                  </FormField>
                  <DesktopFormWrap>
                    <DesktopPasswordWrap>
                      <GenderFormField>
                        <GenderText>Your gender identity</GenderText>
                        <RadioBtnWrap>
                          <RadioBtnLabel>
                            <RadioBtn
                              type="radio"
                              name="gender"
                              value="female"
                              checked={values.gender === 'female'}
                            />
                            <RadioBtnText>Girl</RadioBtnText>
                          </RadioBtnLabel>
                          <RadioBtnLabel>
                            <RadioBtn
                              type="radio"
                              name="gender"
                              value="male"
                              checked={values.gender === 'male'}
                            />
                            <RadioBtnText>Man</RadioBtnText>
                          </RadioBtnLabel>
                        </RadioBtnWrap>
                      </GenderFormField>
                      <FormField>
                        <StyledLabel htmlFor="username">Your name</StyledLabel>
                        <Input
                          type="text"
                          id="username"
                          name="name"
                          className={
                            errors.name && touched.name ? 'error-input' : null
                          }
                          placeholder={values.name}
                        />
                        <StyledErrorMessage component="p" name="name" />
                      </FormField>
                      <LastFormField>
                        <StyledLabel htmlFor="email">E-mail</StyledLabel>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          className={
                            errors.email && touched.email ? 'error-input' : null
                          }
                          placeholder={values.email}
                        />
                        <StyledErrorMessage component="p" name="email" />
                      </LastFormField>
                    </DesktopPasswordWrap>
                    <DesktopPasswordWrap>
                      <PasswordText>Password</PasswordText>
                      <PasswordFormField>
                        <PasswordLabel htmlFor="oldPassword">
                          Outdated password:
                        </PasswordLabel>
                        <PasswordInputWrap>
                          <Input
                            type={isPasswordShown ? 'text' : 'password'}
                            id="oldPassword"
                            name="outdatedPassword"
                            className={
                              errors.outdatedPassword &&
                              touched.outdatedPassword
                                ? 'error-input'
                                : null
                            }
                            placeholder="Password"
                          />
                          <IconBtn
                            type="button"
                            onClick={handlePasswordVisibility}
                          >
                            {isPasswordShown ? (
                              <PasswordIcon>
                                <use href={`${sprite}#icon-to-open`}></use>
                              </PasswordIcon>
                            ) : (
                              <PasswordIcon>
                                <use href={`${sprite}#icon-to-hide`}></use>
                              </PasswordIcon>
                            )}
                          </IconBtn>
                        </PasswordInputWrap>
                        <StyledErrorMessage
                          component="p"
                          name="outdatedPassword"
                        />
                      </PasswordFormField>
                      <PasswordFormField>
                        <PasswordLabel htmlFor="password">
                          New Password:
                        </PasswordLabel>
                        <PasswordInputWrap>
                          <Input
                            type={isPasswordShown ? 'text' : 'password'}
                            id="password"
                            name="newPassword"
                            className={
                              (errors.newPassword && touched.newPassword) ||
                              (values.outdatedPassword && !values.newPassword)
                                ? 'error-input'
                                : null
                            }
                            placeholder="Password"
                          />
                          <IconBtn
                            type="button"
                            onClick={handlePasswordVisibility}
                          >
                            {isPasswordShown ? (
                              <PasswordIcon>
                                <use href={`${sprite}#icon-to-open`}></use>
                              </PasswordIcon>
                            ) : (
                              <PasswordIcon>
                                <use href={`${sprite}#icon-to-hide`}></use>
                              </PasswordIcon>
                            )}
                          </IconBtn>
                        </PasswordInputWrap>
                        {values.outdatedPassword && !values.newPassword && (
                          <StyledErrorText>
                            Please, enter new password
                          </StyledErrorText>
                        )}
                        <StyledErrorMessage component="p" name="newPassword" />
                      </PasswordFormField>
                      <LastFormField>
                        <PasswordLabel htmlFor="repeatedPassword">
                          Repeat new password:
                        </PasswordLabel>
                        <PasswordInputWrap>
                          <Input
                            type={isPasswordShown ? 'text' : 'password'}
                            id="repeatedPassword"
                            name="repeatedPassword"
                            className={
                              values.newPassword !== values.repeatedPassword
                                ? 'error-input'
                                : null
                            }
                            placeholder="Password"
                          />
                          <IconBtn
                            type="button"
                            onClick={handlePasswordVisibility}
                          >
                            {isPasswordShown ? (
                              <PasswordIcon>
                                <use href={`${sprite}#icon-to-open`}></use>
                              </PasswordIcon>
                            ) : (
                              <PasswordIcon>
                                <use href={`${sprite}#icon-to-hide`}></use>
                              </PasswordIcon>
                            )}
                          </IconBtn>
                        </PasswordInputWrap>
                        <StyledErrorMessage
                          component="p"
                          name="repeatedPassword"
                        />
                      </LastFormField>
                    </DesktopPasswordWrap>
                  </DesktopFormWrap>
                  <SaveBtn type="submit">Save</SaveBtn>
                </Form>
              )}
            </Formik>
          }
        </ModalWrap>
      </BaseModalWindow>
    </>
  );
};
