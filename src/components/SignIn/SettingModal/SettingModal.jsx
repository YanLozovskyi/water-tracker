import { useEffect, useRef } from 'react';
import { useState } from 'react';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { BaseModalWindow } from 'components';

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

  const handleDownload = () => {
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
        <div>
          {
            <form>
              <div>
                <p>Your photo</p>
                {
                  <img
                    src={avatar ? avatar : defaultAvatar}
                    alt="user avatar"
                    width="80px"
                    height="80px"
                  />
                }

                <label>
                  <input
                    ref={filePicker}
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={event => {
                      if (event.target.files && event.target.files.length > 0) {
                        setFiles(event.target.files);
                      }
                    }}
                  />
                  <button type="button" onClick={handleDownload}>
                    <svg>
                      <use href={`${sprite}#icon-arrow-up`}></use>
                    </svg>
                    <span>Upload a photo</span>
                  </button>
                </label>
              </div>
              <div>
                <p>Your gender identity</p>
                <label>
                  Girl
                  <input
                    type="radio"
                    name="gender"
                    value="Girl"
                    checked={gender === 'Girl'}
                    onChange={event => setGender(event.target.value)}
                  />
                </label>
                <label>
                  Man
                  <input
                    type="radio"
                    name="gender"
                    value="Man"
                    checked={gender === 'Man'}
                    onChange={event => setGender(event.target.value)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="username">Your name</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  placeholder={username}
                  onChange={event => setUserName(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder={email}
                  onChange={event => setEmail(event.target.value)}
                />
              </div>
              <p>Password</p>
              <div>
                <label htmlFor="oldPassword">Outdated password:</label>
                <div>
                  <input
                    type={isPasswordShown ? 'text' : 'password'}
                    id="oldPassword"
                    name="oldPassword"
                    value={oldPassword}
                    placeholder="Password"
                    onChange={event => setOldPassword(event.target.value)}
                  />
                  <button type="button" onClick={handlePasswordVisibility}>
                    <svg>
                      <use href={`${sprite}#icon-to-hide`}></use>
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="password">New Password:</label>
                <div>
                  <input
                    type={isPasswordShown ? 'text' : 'password'}
                    id="password"
                    name="newPassword"
                    value={password}
                    placeholder="Password"
                    onChange={event => setPassword(event.target.value)}
                  />
                  <button type="button" onClick={handlePasswordVisibility}>
                    <svg>
                      <use href={`${sprite}#icon-to-hide`}></use>
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="repeatedPassword">Repeat new password:</label>
                <div>
                  <input
                    type={isPasswordShown ? 'text' : 'password'}
                    id="repeatedPassword"
                    name="repeatedPassword"
                    value={repeatedPassword}
                    placeholder="Password"
                    onChange={event => setRepeatedPassword(event.target.value)}
                  />
                  <button type="button" onClick={handlePasswordVisibility}>
                    <svg>
                      <use href={`${sprite}#icon-to-hide`}></use>
                    </svg>
                  </button>
                </div>
              </div>
              <button type="submit">Save</button>
            </form>
          }
        </div>
      </BaseModalWindow>
    </>
  );
};
