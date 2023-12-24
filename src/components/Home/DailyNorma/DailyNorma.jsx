import { useState } from 'react';
import { DailyNormaModal } from 'components';
import { DailyBox } from './DailyNorma.styled';

export const DailyNorma = ({ userWaterIntake }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <DailyBox>
      <h2>My daily norma: </h2>
      <div>
        <p>{userWaterIntake || '2.0 L'}</p>
        <button onClick={openModal}>Edit</button>
      </div>

      {isModalOpen && <DailyNormaModal onClose={closeModal} />}
    </DailyBox>
  );
};
