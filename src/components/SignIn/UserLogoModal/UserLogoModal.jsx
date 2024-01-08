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
  const userMenuRef = useRef();

  const [isFirstModalOpen, setFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);

  useEffect(() => {
    const clickOutside = e => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target) &&
        parentRef.current &&
        !parentRef.current.contains(e.target)
      ) {
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
            <StyledBtn
              type="button"
              onClick={() => {
                setFirstModalOpen(true);
              }}
            >
              <IconSettings width="16px" height="16px">
                <use href={`${sprite}#icon-settings`}></use>
              </IconSettings>
              Setting
            </StyledBtn>
          </StyledListItem>
          <StyledListItem>
            <StyledBtn
              type="button"
              onClick={() => {
                setSecondModalOpen(true);
              }}
            >
              <IconSettings width="16px" height="16px">
                <use href={`${sprite}#icon-exit`}></use>
              </IconSettings>
              Log out
            </StyledBtn>
          </StyledListItem>
        </ul>
        <SettingModal
          onClose={() => {
            setFirstModalOpen(false);
          }}
          onShow={isFirstModalOpen}
        />
        <UserLogoutModal
          onClose={() => {
            setSecondModalOpen(false);
          }}
          onShow={isSecondModalOpen}
        />
      </StyledLogoModal>
    </>
  );
};
