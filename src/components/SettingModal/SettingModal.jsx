import { useState } from 'react';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { BaseModalWindow } from '../common/BaseModalWindow/BaseModalWindow';

export const SettingModal = ({ onClose }) => {
  const [gender, setGender] = useState('girl');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  return (
    <>
      <BaseModalWindow onClose={onClose} title="Setting">
        <div>
          {
            <form>
              <div>
                <label htmlFor="avatar">Your photo</label>
                <div>
                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/png, image/jpeg"
                  />
                  <svg>
                    <use href={`${sprite}#icon-arrow-up`}></use>
                  </svg>
                  Upload a photo
                </div>
              </div>
              <div>
                <label htmlFor="gender">Your gender identity</label>
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  value={gender}
                  checked={gender === 'Girl'}
                  onChange={event => setGender(event.target.value)}
                />
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
                    type="password"
                    id="oldPassword"
                    name="oldPassword"
                    value={oldPassword}
                    placeholder="Password"
                    onChange={event => setOldPassword(event.target.value)}
                  />
                  <svg>
                    <use href={`${sprite}#icon-to-hide`}></use>
                  </svg>
                </div>
              </div>
              <div>
                <label htmlFor="newPassword">New Password:</label>
                <div>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={newPassword}
                    placeholder="Password"
                    onChange={event => setNewPassword(event.target.value)}
                  />
                  <svg>
                    <use href={`${sprite}#icon-to-hide`}></use>
                  </svg>
                </div>
              </div>
              <div>
                <label htmlFor="repeatedPassword">Repeat new password:</label>
                <div>
                  <input
                    type="password"
                    id="repeatedPassword"
                    name="newPassword"
                    value={newPassword}
                    placeholder="Password"
                    onChange={event => setNewPassword(event.target.value)}
                  />
                  <svg>
                    <use href={`${sprite}#icon-to-hide`}></use>
                  </svg>
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
