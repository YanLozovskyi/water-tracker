import { useDispatch } from 'react-redux';
import { deleteWaterThunk } from '../../../redux/waterData/waterOperations';
import { BaseModalWindow } from 'components';
import {
  ButtonStyle,
  BoxModal,
  TextStyle,
  ButtonBox,
  StyleTitle,
} from './DeletingEntryModal.styled';

export const DeletingEntryModal = ({ onClose, recordId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteWaterThunk(recordId)).unwrap();
    onClose();
  };
  return (
    <BaseModalWindow
      onClose={onClose}
      title={"Delete Entry"}
    >
      <BoxModal>
        <TextStyle>Are you sure you want to delete the entry?</TextStyle>
        <ButtonBox>
          <ButtonStyle onClick={handleDelete}>Delete</ButtonStyle>
          <ButtonStyle onClick={onClose}>Cancel</ButtonStyle>
        </ButtonBox>
      </BoxModal>
    </BaseModalWindow >
  );
};
