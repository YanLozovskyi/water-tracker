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

export const UserLogoutModal = ({ onClose, onShow }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectIsLoading);
  const stylesPadding = '32px 24px';

  return (
    <>
      <BaseModalWindow
        onClose={onClose}
        onShow={onShow}
        stylesPadding={stylesPadding}
        title="Log out"
      >
        <ModalWrap>
          <ModalTitle>Do you really want to leave?</ModalTitle>
          <List>
            <li>
              <CancelBtn type="button" onClick={onClose}>
                Cancel
              </CancelBtn>
            </li>
            <li>
              <LogOutBtn type="button" onClick={() => dispatch(logOutThunk())}>
                Log out {isLoading && <ContentLoader />}
              </LogOutBtn>
            </li>
          </List>
        </ModalWrap>
      </BaseModalWindow>
    </>
  );
};
