import { useState } from 'react';
import { UserLogoModal } from '../UserLogoModal/UserLogoModal';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { UserLogoBtn, UserModalIcon } from './UserLogo.styled';

export const UserLogo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
      <UserLogoBtn onClick={showModal}>
        <p>user</p>
        <UserModalIcon>
          <use href={`${sprite}#icon-arrow-down`}></use>
        </UserModalIcon>
      </UserLogoBtn>
      {modalIsOpen && <UserLogoModal onClose={showModal} />}
    </div>
  );
};
