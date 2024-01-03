import { BaseModalWindow } from 'components';
import {
  ButtonStyle,
  ModalContainer,
  TextStyle,
  ButtonBox,
} from './DeletingEntryModal.styled';

export const DeletingEntryModal = ({ onClose, onDelete, title }) => {
  return (
    <BaseModalWindow onClose={onClose} title={title}>
      <ModalContainer>
        <TextStyle>Are you sure you want to delete the entry?</TextStyle>
        <ButtonBox>
          <ButtonStyle onClick={onDelete}>Delete</ButtonStyle>
          <ButtonStyle onClick={onClose}>Cancel</ButtonStyle>
        </ButtonBox>
      </ModalContainer>
    </BaseModalWindow>
  );
};
