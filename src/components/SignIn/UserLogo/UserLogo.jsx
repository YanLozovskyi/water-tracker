import { UserLogoModal } from 'components';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { selectUser } from '../../../redux/auth/authSelectors';
import {
  UserAvatar,
  UserDefaultAvatar,
  UserLogoBtn,
  UserLogoContainer,
  UserLogoTitle,
  UserModalIcon,
} from './UserLogo.styled';

export const UserLogo = () => {
  const myRef = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { name, avatarURL } = useSelector(selectUser);

  const showModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const firstLetter = name ? name.charAt(0).toUpperCase() : 'V';

  const getUserInfo = () => {
    if (name && avatarURL) {
      return {
        userName: name,
        avatar: avatarURL,
      };
    } else if (name || avatarURL) {
      return {
        userName: name || firstLetter,
        avatar: avatarURL || firstLetter,
      };
    } else {
      return {
        userName: firstLetter,
        avatar: firstLetter,
      };
    }
  };

  const { userName, avatar } = getUserInfo();

  return (
    <UserLogoContainer>
      <UserLogoTitle>{userName}</UserLogoTitle>
      <UserLogoBtn onClick={showModal} ref={myRef}>
        {avatarURL ? (
          <UserAvatar src={avatar} alt="user-avatar" />
        ) : (
          <UserDefaultAvatar>{avatar}</UserDefaultAvatar>
        )}
        <UserModalIcon>
          <use href={`${sprite}#icon-arrow-down`}></use>
        </UserModalIcon>
      </UserLogoBtn>
      {modalIsOpen && <UserLogoModal setOnShowDropdown={setModalIsOpen} parentRef={myRef} />}
    </UserLogoContainer>
  );
};
