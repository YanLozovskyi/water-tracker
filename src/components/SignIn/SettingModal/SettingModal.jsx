import { useEffect, useRef } from 'react';
import { useState } from 'react';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { BaseModalWindow } from 'components';
import {
  DownloadWrap,
  FormText,
  HiddenInput,
  IconDownload,
  StyledLabel,
  DownloadBtn,
  DownloadBtnText,
  FormField,
  GenderText,
  RadioBtn,
  RadioBtnWrap,
  RadioBtnText,
  RadioBtnLabel,
  Input,
  Avatar,
  ModalWrap,
  PasswordText,
  PasswordLabel,
  PasswordFormField,
  IconBtn,
  PasswordIcon,
  PasswordInputWrap,
  SaveBtn,
  DesktopFormWrap,
  DesktopPasswordWrap,
  LastFormField,
  GenderFormField,
} from './SettingModal.styled';

const defaultAvatar = 'src/assets/images/default_avatar_to_download.jpg';

export const SettingModal = ({ onClose }) => {
  const [files, setFiles] = useState(); //аватарка, яку завантажує юзер
  const [avatar, setAvatar] = useState(); //рендер аватарки
  const [gender, setGender] = useState('girl');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const filePicker = useRef(null);

  const handleDownloadAvatar = () => {
    filePicker.current.click();
  };

  const handlePasswordVisibility = () => {
    setIsPasswordShown(previsPasswordShown => !previsPasswordShown);
  };

  useEffect(() => {
    if (!files) {
      return;
    }
    const objectUrl = URL.createObjectURL(files[0]); //перетворюємо об'єкт файла на URL

    setAvatar(objectUrl); //сетимо URL файла в стейт

    return () => {
      URL.revokeObjectURL(objectUrl); //підчищаємо пам'ять
    };
  }, [files]);

  return (
    <>
      <BaseModalWindow onClose={onClose} title="Setting">
        <ModalWrap>
          {
            <form>
              <FormField>
                <FormText>Your photo</FormText>
                <DownloadWrap>
                  {
                    <Avatar
                      src={avatar ? avatar : defaultAvatar}
                      alt="user avatar"
                      width="80px"
                      height="80px"
                    />
                  }

                  <label>
                    <HiddenInput
                      ref={filePicker}
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={event => {
                        if (
                          event.target.files &&
                          event.target.files.length > 0
                        ) {
                          setFiles(event.target.files);
                        }
                      }}
                    />
                    <DownloadBtn type="button" onClick={handleDownloadAvatar}>
                      <IconDownload>
                        <use href={`${sprite}#icon-arrow-up`}></use>
                      </IconDownload>
                      <DownloadBtnText>Upload a photo</DownloadBtnText>
                    </DownloadBtn>
                  </label>
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
                          checked={gender === 'Girl'}
                          onChange={event => setGender(event.target.value)}
                        />
                        <RadioBtnText>Girl</RadioBtnText>
                      </RadioBtnLabel>
                      <RadioBtnLabel>
                        <RadioBtn
                          type="radio"
                          name="gender"
                          value="Man"
                          checked={gender === 'Man'}
                          onChange={event => setGender(event.target.value)}
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
                      name="username"
                      value={username}
                      placeholder={username}
                      onChange={event => setUserName(event.target.value)}
                    />
                  </FormField>
                  <LastFormField>
                    <StyledLabel htmlFor="email">E-mail</StyledLabel>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      placeholder={email}
                      onChange={event => setEmail(event.target.value)}
                    />
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
                        name="oldPassword"
                        value={oldPassword}
                        placeholder="Password"
                        onChange={event => setOldPassword(event.target.value)}
                      />
                      <IconBtn type="button" onClick={handlePasswordVisibility}>
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
                        value={password}
                        placeholder="Password"
                        onChange={event => setPassword(event.target.value)}
                      />
                      <IconBtn type="button" onClick={handlePasswordVisibility}>
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
                        value={repeatedPassword}
                        placeholder="Password"
                        onChange={event =>
                          setRepeatedPassword(event.target.value)
                        }
                      />
                      <IconBtn type="button" onClick={handlePasswordVisibility}>
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
                  </LastFormField>
                </DesktopPasswordWrap>
              </DesktopFormWrap>
              <SaveBtn type="submit">Save</SaveBtn>
            </form>
          }
        </ModalWrap>
      </BaseModalWindow>
    </>
  );
};
