import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';
import { DailyNormaModal } from 'components';
import {
  DailyBox,
  BackgroundHome,
  DailyNormaStyled,
} from './DailyNorma.styled';

export const DailyNorma = () => {
  const { waterRate } = useSelector(selectUser);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Перетворення мілілітрів у літри
  const waterRateL = (waterRate / 1000).toFixed(1) + ' L';

  return (
    <DailyBox>
      <DailyNormaStyled>
        <h2>My daily norma: </h2>
        <div>
          <p>{waterRateL}</p>
          <button onClick={openModal}>Edit</button>
        </div>
        <DailyNormaModal onClose={closeModal} onShow={isModalOpen} />
      </DailyNormaStyled>
      <BackgroundHome />
    </DailyBox>
  );
};
