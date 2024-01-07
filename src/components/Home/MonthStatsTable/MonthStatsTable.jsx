import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthWater } from '../../../redux/waterData/waterOperations';
import {
  selectMonthData,
  selectWaterVolumePercentage,
} from '../../../redux/waterData/waterSelectors';
import {
  format,
  subMonths,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from 'date-fns';
import { DaysGeneralStats } from 'components';

import {
  ButtonPaginator,
  DaysButton,
  DaysList,
  DaysPercentage,
  HeaderMonth,
  Paginator,
  Year,
} from './MonthStatsTable.styled';

export const MonthStatsTable = () => {
  const dispatch = useDispatch();
  const monthData = useSelector(selectMonthData);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  // const [activeButton, setActiveButton] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [dayPosition, setDayPosition] = useState({ top: 0, left: 0, width: 0 });
  const [selectedDayStats, setSelectedDayStats] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const dayRefs = useRef({});
  const roundedWaterVolumePercentage = useSelector(selectWaterVolumePercentage);

  const startDate = format(startOfMonth(selectedMonth), 'yyyy-MM-dd');
  const endDate = format(endOfMonth(selectedMonth), 'yyyy-MM-dd');

  useEffect(() => {
    dispatch(getMonthWater({ startDate, endDate }));
  }, [dispatch, endDate, roundedWaterVolumePercentage, startDate]);

  const handlePreviousMonth = () => {
    setSelectedMonth(subMonths(selectedMonth, 1));
  };

  const handleNextMonth = () => {
    if (selectedMonth < new Date()) {
      setSelectedMonth(addMonths(selectedMonth, 1));
    }
  };

  // Створення списку всіх днів у вибраному місяці
  const daysOfMonth = eachDayOfInterval({
    start: startOfMonth(selectedMonth),
    end: endOfMonth(selectedMonth),
  });

  // Перетворення масиву даних з Redux в об'єкт для легкого доступу
  const monthDataMap = monthData.reduce((acc, dayData) => {
    acc[dayData.date] = dayData;
    return acc;
  }, {});

  const onDayClick = day => {
    const dayKey = format(day, 'yyyy-MM-dd');
    const dayData = monthDataMap[dayKey];

    // Визначаємо, чи поточний день є вже вибраним
    const isSameDaySelected = selectedDayStats?.date === dayKey;

    if (isSameDaySelected && modalVisible) {
      setModalVisible(false);
      setSelectedDayStats(null);
    } else {
      //В іншому випадку оновлюємо вибраний день і показуємо статистику
      setSelectedDayStats({
        date: dayKey,
        waterVolumeSum: dayData ? dayData.waterVolumeSum : 0,
        drinkCount: dayData ? dayData.drinkCount : 0,
        waterVolumePercentage: dayData ? dayData.waterVolumePercentage : 0,
      });
      setModalVisible(true);
    }

    //Встановлення позиції модального вікна
    const dayElement = dayRefs.current[day];
    if (dayElement) {
      const rect = dayElement.getBoundingClientRect();
      setDayPosition({
        top: rect.top + window.scrollY,
        left: rect.left,
        width: rect.width,
      });
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedDayStats(null);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalVisible) {
        const isClickOutside = Object.values(dayRefs.current).every(
          ref => ref && !ref.contains(event.target),
        );

        if (isClickOutside) {
          handleCloseModal();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalVisible, selectedDayStats]);

  return (
    <div>
      <HeaderMonth>
        <h2>Month</h2>
        <Paginator
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <ButtonPaginator
            onClick={handlePreviousMonth}
            // onClick={() => changeMonth('prev')}
            // active={activeButton === 'next'}
          >
            &lt;
          </ButtonPaginator>
          <span>{format(selectedMonth, 'MMMM')}</span>
          {isHovering && (
            <Year>{format(selectedMonth, 'yyyy').split('-')[0]}</Year>
          )}
          <ButtonPaginator
            onClick={handleNextMonth}
            disabled={selectedMonth >= new Date()}
            // onClick={() => changeMonth('next')}
            // active={activeButton === 'prev'}
          >
            &gt;
          </ButtonPaginator>
        </Paginator>
      </HeaderMonth>

      <DaysList>
        {daysOfMonth.map(day => {
          const dayKey = format(day, 'yyyy-MM-dd');
          const dayData = monthDataMap[dayKey];

          const percentage = dayData ? dayData.waterVolumePercentage : 0;
          const isHighlighted = dayData && dayData.waterVolumePercentage < 100;

          return (
            <div key={dayKey}>
              <DaysPercentage>
                <DaysButton
                  ref={el => (dayRefs.current[day] = el)}
                  onClick={() => onDayClick(day)}
                  isHighlighted={isHighlighted}
                >
                  {format(day, 'd')}
                </DaysButton>
                <span>{Math.round(percentage)}%</span>
              </DaysPercentage>
            </div>
          );
        })}

        {modalVisible && selectedDayStats && (
          <DaysGeneralStats
            stats={selectedDayStats}
            position={dayPosition}
            onClose={handleCloseModal}
            onShow={modalVisible}
          />
        )}
      </DaysList>
    </div>
  );
};
