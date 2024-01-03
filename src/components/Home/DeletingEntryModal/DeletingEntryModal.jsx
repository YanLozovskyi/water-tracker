import React from 'react';
import { BaseModalWindow } from 'components';

export const DeletingEntryModal = ({ onClose, onDelete, title }) => {
  return (
    <BaseModalWindow onClose={onClose} title={title}>
      <p>Are you sure you want to delete the entry?</p>
      <button onClick={onClose}>Cancel</button>
      <button onClick={onDelete}>Delete</button>
    </BaseModalWindow>
  );
};
