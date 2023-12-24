import { BaseModalWindow } from "components";

export const TodayListModal = ({ onClose }) => {
  return (
    <BaseModalWindow onClose={onClose} title="Add water">
      <div>{/* Form and other elements */}</div>
    </BaseModalWindow>
  );
};
