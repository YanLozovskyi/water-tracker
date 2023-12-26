import { BaseModalWindow } from 'components';
import {
  ModalTitle,
  LogOutBtn,
  CancelBtn,
  ModalWrap,
  List,
} from './UserLogoutModal.styled';

export const UserLogoutModal = ({ onClose }) => {
  return (
    <>
      <BaseModalWindow onClose={onClose} title="Log out">
        <ModalWrap>
          {
            <form>
              <ModalTitle>Do you really want to leave?</ModalTitle>
              <List>
                <li>
                  <CancelBtn type="button" onClick={onClose}>
                    Cancel
                  </CancelBtn>
                </li>
                <li>
                  <LogOutBtn type="submit">Log out</LogOutBtn>
                </li>
              </List>
            </form>
          }
        </ModalWrap>
      </BaseModalWindow>
    </>
  );
};
