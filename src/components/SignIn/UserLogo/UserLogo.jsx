import { UserLogoModal } from 'components';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { selectUser } from '../../../redux/auth/authSelectors';
import { UserLogoModalWrap } from '../UserLogoModal/UserLogoModal.styled';
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
        <UserModalIcon
          style={{ transform: modalIsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <use href={`${sprite}#icon-arrow-down`}></use>
        </UserModalIcon>
      </UserLogoBtn>
      <UserLogoModalWrap>
        <AnimatePresence>
          {modalIsOpen && (
            <motion.div
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ ease: 'backOut', duration: 0.7 }}
            >
              <UserLogoModal
                setOnShowDropdown={setModalIsOpen}
                parentRef={myRef}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </UserLogoModalWrap>
    </UserLogoContainer>
  );
};
