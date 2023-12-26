import { BaseModalWindow } from 'components';
import { useDispatch } from 'react-redux';
import { logOutThunk } from '../../../redux/auth/authOperations';
import {
  CancelBtn,
  List,
  LogOutBtn,
  ModalTitle,
  ModalWrap,
} from './UserLogoutModal.styled';

export const UserLogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();

  return (
    <>
      <BaseModalWindow onClose={onClose} title="Log out">
        <ModalWrap>
          <ModalTitle>Do you really want to leave?</ModalTitle>
          <List>
            <li>
              <CancelBtn type="button" onClick={onClose}>
                Cancel
              </CancelBtn>
            </li>
            <li>
              <LogOutBtn type="button" onClick={() => dispatch(logOutThunk())}>Log out</LogOutBtn>
            </li>
          </List>
        </ModalWrap>
      </BaseModalWindow>
    </>
  );
};
