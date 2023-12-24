import { useState } from 'react';
import { UserLogoModal } from '../UserLogoModal/UserLogoModal';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { UserLogoBtn, UserModalIcon, UserAvatar } from './UserLogo.styled';

export const UserLogo = () => {
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const getUserInfo = () => {
    if (userName && userAvatar) {
      return {
        name: userName,
        avatar: userAvatar,
      };
    } else if (userName) {
      return {
        name: userName,
        avatar: userName.charAt(0).toUpperCase(),
      };
    } else {
      return {
        name: 'V',
        avatar: 'V',
      };
    }
  };

  const { name, avatar } = getUserInfo();

  return (
    <div>
      <UserLogoBtn onClick={showModal}>
        <p>{name}</p>
        <UserAvatar src={avatar} alt="" />
        <UserModalIcon>
          <use href={`${sprite}#icon-arrow-down`}></use>
        </UserModalIcon>
      </UserLogoBtn>
      {modalIsOpen && <UserLogoModal onClose={showModal} />}
    </div>
  );
};
