import { useState } from 'react';
import { DailyNormaModal } from 'components';

export const DailyNorma = ({ userWaterIntake }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="daily-norma">
      <p>Daily Water Norm: {userWaterIntake || '2.0 L'}</p>
      <button onClick={openModal}>Edit</button>

      {isModalOpen && <DailyNormaModal onClose={closeModal} />}
    </div>
  );
};
