import { BaseModalWindow, ContentLoader } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../../redux/root/rootSelectors';
import { deleteWaterThunk } from '../../../redux/waterData/waterOperations';
import {
  BoxModal,
  ButtonBox,
  ButtonStyle,
  TextStyle,
} from './DeletingEntryModal.styled';

export const DeletingEntryModal = ({ onClose, onShow, recordId }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectIsLoading);
  const stylesPadding = '32px 24px';

  const handleDelete = () => {
    dispatch(deleteWaterThunk(recordId)).then(data => {
      if (!data.error) onClose();
    });
  };
  return (
    <BaseModalWindow
      onClose={onClose}
      onShow={onShow}
      stylesPadding={stylesPadding}
      title={'Delete Entry'}
    >
      <BoxModal>
        <TextStyle>Are you sure you want to delete the entry?</TextStyle>
        <ButtonBox>
          <ButtonStyle onClick={handleDelete}>
            Delete {isLoading && <ContentLoader />}
          </ButtonStyle>
          <ButtonStyle onClick={onClose}>Cancel</ButtonStyle>
        </ButtonBox>
      </BoxModal>
    </BaseModalWindow>
  );
};
