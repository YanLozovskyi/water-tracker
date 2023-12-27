import { SettingModal, UserLogoutModal } from 'components';
import { useState } from 'react';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  IconSettings,
  StyledBtn,
  StyledListItem,
  StyledLogoModal,
} from './UserLogoModal.styled';

export const UserLogoModal = () => {
  const [isFirstModalOpen, setFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);

  const openFirstModal = () => {
    setFirstModalOpen(true);
  };

  const closeFirstModal = () => {
    setFirstModalOpen(false);
  };

  const openSecondModal = () => {
    setSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setSecondModalOpen(false);
  };

  return (
    <>
      <StyledLogoModal>
        <ul>
          <StyledListItem>
            <IconSettings width="16px" height="16px">
              <use href={`${sprite}#icon-settings`}></use>
            </IconSettings>
            <StyledBtn type="button" onClick={openFirstModal}>
              Setting
              {isFirstModalOpen && <SettingModal onClose={closeFirstModal} />}
            </StyledBtn>
          </StyledListItem>
          <StyledListItem>
            <IconSettings width="16px" height="16px">
              <use href={`${sprite}#icon-exit`}></use>
            </IconSettings>
            <StyledBtn type="button" onClick={openSecondModal}>
              Log out
              {isSecondModalOpen && (
                <UserLogoutModal onClose={closeSecondModal} />
              )}
            </StyledBtn>
          </StyledListItem>
        </ul>
      </StyledLogoModal>
    </>
  );
};
