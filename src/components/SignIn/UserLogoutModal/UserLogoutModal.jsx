import { BaseModalWindow, ContentLoader } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from '../../../redux/auth/authOperations';
import { selectIsLoading } from '../../../redux/root/rootSelectors';
import {
  CancelBtn,
  List,
  LogOutBtn,
  ModalTitle,
  ModalWrap,
} from './UserLogoutModal.styled';

export const UserLogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectIsLoading)

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
              <LogOutBtn type="button" onClick={() => dispatch(logOutThunk())}>Log out {isLoading && <ContentLoader />}</LogOutBtn>
            </li>
          </List>
        </ModalWrap>
      </BaseModalWindow>
    </>
  );
};
