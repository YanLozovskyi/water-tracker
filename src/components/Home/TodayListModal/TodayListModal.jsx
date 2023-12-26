import { BaseModalWindow } from 'components';

export const TodayListModal = ({ onClose }) => {
  return (
    <BaseModalWindow onClose={onClose} title="Add water">
      <div>
        <h2>Edit the entered amount of water</h2>

        <button>Save</button>
      </div>
    </BaseModalWindow>
  );
};
