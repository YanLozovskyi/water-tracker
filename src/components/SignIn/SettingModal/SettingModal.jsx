import { BaseModalWindow } from 'components';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import sprite from 'src/assets/images/sprite/sprite.svg';
import * as Yup from 'yup';
import defaultAvatar from '../../../assets/images/default_avatar_to_download.jpg';
import {
  Avatar,
  DesktopFormWrap,
  DesktopPasswordWrap,
  DownloadBtn,
  DownloadBtnText,
  DownloadWrap,
  ErrorInput,
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
  StyledLabel
} from './SettingModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatarThunk } from '../../../redux/auth/authOperations';
import { selectUser } from '../../../redux/auth/authSelectors';

const settingFormValidationSchema = Yup.object().shape({
  gender: Yup.string().required('Required'),
  username: Yup.string()
    .min(3, 'Username must be more then 3 characters long')
    .max(32, 'Username must be less then 32 characters long')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  newPassword: Yup.string()
    .min(8, 'New password must be at least 8 characters long')
    .max(64, 'New password must be less then 64 characters long')
    .required('Required'),
  oldPassword: Yup.string()
    .min(8, 'Old password must be at least 8 characters long')
    .max(64, 'Old password must be less then 64 characters long')
    .required('Required'),
});

export const SettingModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { avatarURL } = useSelector(selectUser);

  // const [gender, setGender] = useState('girl');
  // const [username, setUserName] = useState('');
  // const [email, setEmail] = useState('');
  // const [oldPassword, setOldPassword] = useState('');
  // const [password, setPassword] = useState('');
  // const [repeatedPassword, setRepeatedPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordShown(previsPasswordShown => !previsPasswordShown);
  };

  const onChange = (e) => {
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
              initialValues={{
                avatar: '',
                gender: 'Girl',
                username: '',
                email: '',
                oldPassword: '',
                newPassword: '',
                repeatedPassword: '',
              }}
              validationSchema={settingFormValidationSchema}
              onSubmit={(values, actions) => {
                console.log(values);
                actions.resetForm();
              }}
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
                          onChange={onChange}
                        />
                        <IconDownload>
                          <use href={`${sprite}#icon-arrow-up`}></use>
                        </IconDownload>
                        <DownloadBtnText>Upload a photo</DownloadBtnText></DownloadBtn>
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
                              value="Girl"
                              checked={values.gender === 'Girl'}
                            // onChange={event => setGender(event.target.value)}
                            />
                            <RadioBtnText>Girl</RadioBtnText>
                          </RadioBtnLabel>
                          <RadioBtnLabel>
                            <RadioBtn
                              type="radio"
                              name="gender"
                              value="Man"
                              checked={values.gender === 'Man'}
                            // onChange={event => setGender(event.target.value)}
                            />
                            <RadioBtnText>Man</RadioBtnText>
                          </RadioBtnLabel>
                        </RadioBtnWrap>
                      </GenderFormField>
                      <FormField>
                        <StyledLabel htmlFor="username">Your name</StyledLabel>
                        {errors.username && touched.username ? (
                          <ErrorInput
                            type="text"
                            id="username"
                            name="username"
                            // value={username}
                            placeholder={values.username}
                          // onChange={event => setUserName(event.target.value)}
                          />
                        ) : (
                          <Input
                            type="text"
                            id="username"
                            name="username"
                            // value={username}
                            placeholder={values.username}
                          // onChange={event => setUserName(event.target.value)}
                          />
                        )}
                        <StyledErrorMessage component="p" name="username" />
                      </FormField>
                      <LastFormField>
                        <StyledLabel htmlFor="email">E-mail</StyledLabel>
                        {errors.email && touched.email ? (
                          <ErrorInput
                            type="email"
                            id="email"
                            name="email"
                            // value={email}
                            placeholder={values.email}
                          // onChange={event => setEmail(event.target.value)}
                          />
                        ) : (
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            // value={email}
                            placeholder={values.email}
                          // onChange={event => setEmail(event.target.value)}
                          />
                        )}
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
                          {errors.oldPassword && touched.oldPassword ? (
                            <ErrorInput
                              type={isPasswordShown ? 'text' : 'password'}
                              id="oldPassword"
                              name="oldPassword"
                              // value={oldPassword}
                              placeholder="Password"
                            // onChange={event => setOldPassword(event.target.value)}
                            />
                          ) : (
                            <Input
                              type={isPasswordShown ? 'text' : 'password'}
                              id="oldPassword"
                              name="oldPassword"
                              // value={oldPassword}
                              placeholder="Password"
                            // onChange={event => setOldPassword(event.target.value)}
                            />
                          )}
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
                        <StyledErrorMessage component="p" name="oldPassword" />
                      </PasswordFormField>
                      <PasswordFormField>
                        <PasswordLabel htmlFor="password">
                          New Password:
                        </PasswordLabel>
                        <PasswordInputWrap>
                          {errors.newPassword && touched.newPassword ? (
                            <ErrorInput
                              type={isPasswordShown ? 'text' : 'password'}
                              id="password"
                              name="newPassword"
                              // value={password}
                              placeholder="Password"
                            // onChange={event => setPassword(event.target.value)}
                            />
                          ) : (
                            <Input
                              type={isPasswordShown ? 'text' : 'password'}
                              id="password"
                              name="newPassword"
                              // value={password}
                              placeholder="Password"
                            // onChange={event => setPassword(event.target.value)}
                            />
                          )}
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
                        <StyledErrorMessage component="p" name="newPassword" />
                      </PasswordFormField>
                      <LastFormField>
                        <PasswordLabel htmlFor="repeatedPassword">
                          Repeat new password:
                        </PasswordLabel>
                        <PasswordInputWrap>
                          {values.newPassword !== values.repeatedPassword ? (
                            <ErrorInput
                              type={isPasswordShown ? 'text' : 'password'}
                              id="repeatedPassword"
                              name="repeatedPassword"
                              // value={repeatedPassword}
                              placeholder="Password"
                            // onChange={event =>
                            //   setRepeatedPassword(event.target.value)
                            // }
                            />
                          ) : (
                            <Input
                              type={isPasswordShown ? 'text' : 'password'}
                              id="repeatedPassword"
                              name="repeatedPassword"
                              // value={repeatedPassword}
                              placeholder="Password"
                            // onChange={event =>
                            //   setRepeatedPassword(event.target.value)
                            // }
                            />
                          )}
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
                        {values.newPassword !== values.repeatedPassword ? (
                          <StyledErrorText>
                            {`The entered password doesn't matches the new
                            password`}
                          </StyledErrorText>
                        ) : null}
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
