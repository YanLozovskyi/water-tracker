import { useState } from 'react';
import { UserLogoModal } from 'components';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  UserLogoBtn,
  UserModalIcon,
  UserAvatar,
  UserDefaultAvatar,
} from './UserLogo.styled';

export const UserLogo = () => {
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const firstLetter = userName ? userName.charAt(0).toUpperCase() : 'V';

  const getUserInfo = () => {
    if (userName && userAvatar) {
      return {
        name: userName,
        avatar: userAvatar,
      };
    } else if (userName) {
      return {
        name: userName,
        avatar: firstLetter,
      };
    } else {
      return {
        name: firstLetter,
        avatar: firstLetter,
      };
    }
  };

  const { name, avatar } = getUserInfo();

  return (
    <div>
      <UserLogoBtn onClick={showModal}>
        <p>{name}</p>
        {userAvatar ? (
          <UserAvatar src={avatar} alt="" />
        ) : (
          <UserDefaultAvatar>{avatar}</UserDefaultAvatar>
        )}
        <UserModalIcon>
          <use href={`${sprite}#icon-arrow-down`}></use>
        </UserModalIcon>
      </UserLogoBtn>
      {modalIsOpen && <UserLogoModal onClose={showModal} />}
    </div>
  );
};
