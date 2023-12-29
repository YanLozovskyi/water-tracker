import { useState } from 'react';
import { UserLogoModal } from 'components';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  UserLogoBtn,
  UserModalIcon,
  UserAvatar,
  UserDefaultAvatar,
  UserLogoTitle,
  UserLogoContainer,
} from './UserLogo.styled';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';

export const UserLogo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { userName, avatarURL } = useSelector(selectUser);

  const showModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const firstLetter = userName ? userName.charAt(0).toUpperCase() : 'V';

  const getUserInfo = () => {
    if (userName && avatarURL) {
      return {
        name: userName,
        avatar: avatarURL,
      };
    } else if (userName || avatarURL) {
      return {
        name: userName || firstLetter,
        avatar: avatarURL || firstLetter,
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
    <UserLogoContainer>
      <UserLogoTitle>{name}</UserLogoTitle>
      <UserLogoBtn onClick={showModal}>
        {avatarURL ? (
          <UserAvatar src={avatar} alt="user-avatar" />
        ) : (
          <UserDefaultAvatar>{avatar}</UserDefaultAvatar>
        )}
        <UserModalIcon>
          <use href={`${sprite}#icon-arrow-down`}></use>
        </UserModalIcon>
      </UserLogoBtn>
      {modalIsOpen && <UserLogoModal />}
    </UserLogoContainer>
  );
};
