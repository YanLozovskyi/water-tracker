import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/authSelectors';
import { formatDate } from '../../../helpers/utils/dateUtils';
import {
  DaysGeneralStatsModal,
  DaysGeneralStatsList,
  DaysGeneralStatsInfo,
  DaysGeneralStatsItem,
  DaysGeneralStatsData,
} from './DaysGeneralStats.styled';

export const DaysGeneralStats = ({ stats, position, onShow }) => {
  const { date, drinkCount, waterVolumePercentage } = stats;
  const modalRef = useRef(null);
  const { waterRate } = useSelector(selectUser);

  useEffect(() => {
    if (!modalRef.current) return;

    const { top, left, width } = position;
    const modal = modalRef.current;
    const modalWidth = modal.offsetWidth;
    const isMobile = window.innerWidth <= 320;

    if (isMobile) {
      modal.style.width = `80%`;
      modal.style.left = '10%';
      modal.style.top = `${top - modal.offsetHeight}px`;
      modal.style.transform = `translateX(0)`;
    } else {
      // Логіка для планшетів та десктопів
      const spaceToLeft = left; // Відстань від елемента до лівого краю екрана
      const spaceToRight = window.innerWidth - left - width; // Відстань від елемента до правого краю екрана

      // Якщо зліва достатньо місця, позиціонувати модальне вікно зліва від елемента
      if (spaceToLeft > modalWidth) {
        modal.style.left = `${left - modalWidth}px`;
      }
      // Якщо зліва не вистачає місця, але вистачає справа, позиціонувати модальне вікно справа
      else if (spaceToRight > modalWidth) {
        modal.style.left = `${left + width}px`;
      }
      // Якщо немає достатньо місця ні зліва, ні справа, позиціонувати по центру екрана
      else {
        modal.style.left = '50%';
        modal.style.transform = 'translateX(-50%)';
      }

      // Позиціонувати модальне вікно над елементом
      modal.style.top = `${top - modal.offsetHeight}px`;
    }
  }, [position]);

  const waterRateL = (waterRate / 1000).toFixed(1) + ' L';

  const formattedDate = date ? formatDate(date, 'd, MMMM') : '';
  return (
    <DaysGeneralStatsModal
      ref={modalRef}
      style={{ visibility: onShow ? 'visible' : 'hidden' }}
    >
      <DaysGeneralStatsList>
        <DaysGeneralStatsItem>
          <DaysGeneralStatsData>{formattedDate}</DaysGeneralStatsData>
        </DaysGeneralStatsItem>
        <DaysGeneralStatsItem>
          Daily norma:<DaysGeneralStatsInfo>{waterRateL}</DaysGeneralStatsInfo>
        </DaysGeneralStatsItem>
        <DaysGeneralStatsItem>
          Fulfillment of the daily norm:
          <DaysGeneralStatsInfo>
            {Math.round(waterVolumePercentage)}%
          </DaysGeneralStatsInfo>
        </DaysGeneralStatsItem>
        <DaysGeneralStatsItem>
          How many servings of water:
          <DaysGeneralStatsInfo>{drinkCount}</DaysGeneralStatsInfo>
        </DaysGeneralStatsItem>
      </DaysGeneralStatsList>
    </DaysGeneralStatsModal>
  );
};
