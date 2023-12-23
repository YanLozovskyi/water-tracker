import { useState } from 'react';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { SettingModal } from '../SettingModal/SettingModal';
import {
  IconSettings,
  StyledBtn,
  StyledListItem,
  StyledLogoModal,
} from './UserLogoModal.styled';

export const UserLogoModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* <div> */}
      <StyledLogoModal>
        <ul>
          <StyledListItem>
            <IconSettings width="16px" height="16px">
              <use href={`${sprite}#icon-settings`}></use>
            </IconSettings>
            <StyledBtn type="button" onClick={openModal}>
              Setting
              {isModalOpen && <SettingModal onClose={closeModal} />}
            </StyledBtn>
          </StyledListItem>
          <StyledListItem>
            <IconSettings width="16px" height="16px">
              <use href={`${sprite}#icon-exit`}></use>
            </IconSettings>
            <StyledBtn type="button" onClick={openModal}>
              Log out
            </StyledBtn>
          </StyledListItem>
        </ul>
      </StyledLogoModal>
      {/* </div> */}
    </>
  );
};
