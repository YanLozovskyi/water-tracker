import { BaseModalWindow, ContentLoader } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../../redux/root/rootSelectors';
import {
  ModalWrap,
  ModalTitle,
  List,
  CancelBtn,
  LogOutBtn,
} from '../UserLogoutModal/UserLogoutModal.styled';

export const UserDeleteModal = ({ onClose, onShow }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectIsLoading);

  return (
    <>
      <BaseModalWindow onClose={onClose} onShow={onShow} title="Delete account">
        <ModalWrap>
          <ModalTitle>Are you sure you want to delete your account?</ModalTitle>
          <List>
            <li>
              <CancelBtn type="button" onClick={onClose}>
                Cancel
              </CancelBtn>
            </li>
            <li>
              <LogOutBtn type="button">
                Delete {isLoading && <ContentLoader />}
              </LogOutBtn>
            </li>
          </List>
        </ModalWrap>
      </BaseModalWindow>
    </>
  );
};
