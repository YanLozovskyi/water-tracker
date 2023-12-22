import { useState } from 'react';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';

const DailyNorma = ({ userWaterIntake }) => {
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

export default DailyNorma;
