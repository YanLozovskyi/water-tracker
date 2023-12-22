import { BaseModalWindow } from '../../components/common/BaseModalWindow/BaseModalWindow'; // Import the base modal window

const Modal = ({ onClose }) => {
  return (
    <BaseModalWindow onClose={onClose} title="My daily norma">
      <div>{/* Form and other elements */}</div>
    </BaseModalWindow>
  );
};

export default Modal;
