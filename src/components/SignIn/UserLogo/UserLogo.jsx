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
    <UserLogoContainer>
      <UserLogoTitle>{name}</UserLogoTitle>
      <UserLogoBtn onClick={showModal} ref={myRef}>
        {avatarURL ? (
          <UserAvatar src={avatar} alt="" />
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
