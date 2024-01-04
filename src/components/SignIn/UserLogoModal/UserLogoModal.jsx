import { SettingModal, UserLogoutModal } from 'components';
import { useEffect, useRef, useState } from 'react';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  IconSettings,
  StyledBtn,
  StyledListItem,
  StyledLogoModal,
} from './UserLogoModal.styled';

export const UserLogoModal = ({ setOnShowDropdown, parentRef }) => {
  const userMenuRef = useRef()

  const [isFirstModalOpen, setFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);

  useEffect(() => {
    const clickOutside = e => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target) && parentRef.current && !parentRef.current.contains(e.target)) {
        setOnShowDropdown(false);
      }
    };

    const handleEsc = e => {
      if (e.code === 'Escape') {
        setOnShowDropdown(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('click', clickOutside);
      window.removeEventListener('keydown', handleEsc);
    };
  }, [parentRef, setOnShowDropdown]);

  return (
    <>
      <StyledLogoModal ref={userMenuRef}>
        <ul>
          <StyledListItem>
            <IconSettings width="16px" height="16px">
              <use href={`${sprite}#icon-settings`}></use>
            </IconSettings>
            <StyledBtn type="button" onClick={() => { setFirstModalOpen(true) }}>
              Setting
            </StyledBtn>
          </StyledListItem>
          <StyledListItem>
            <IconSettings width="16px" height="16px">
              <use href={`${sprite}#icon-exit`}></use>
            </IconSettings>
            <StyledBtn type="button" onClick={() => { setSecondModalOpen(true) }}>
              Log out
            </StyledBtn>
          </StyledListItem>
        </ul>
        {isFirstModalOpen && <SettingModal onClose={() => { setFirstModalOpen(false) }} />}
        {isSecondModalOpen && (<UserLogoutModal onClose={() => { setSecondModalOpen(false) }} />)}
      </StyledLogoModal>
    </>
  );
};
