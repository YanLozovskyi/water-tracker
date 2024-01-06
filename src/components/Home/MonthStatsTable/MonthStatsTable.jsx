import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthWater } from '../../../redux/waterData/waterOperations';
import { selectMonthData } from '../../../redux/waterData/waterSelectors';
import { DaysGeneralStats } from 'components';
import {
  getCurrentMonth,
  daysInMonth,
  formatMonth,
} from '../../../helpers/utils/dateUtils';
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
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
  const [activeButton, setActiveButton] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [dayPosition, setDayPosition] = useState({ top: 0, left: 0, width: 0 });
  const [selectedDayStats, setSelectedDayStats] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    dispatch(getMonthWater(selectedMonth));
  }, [selectedMonth, dispatch]);

  // useMemo для обчислення стану для кожного дня
  const daysWithData = useMemo(() => {
    return [...Array(daysInMonth(selectedMonth)).keys()].map(dayIndex => {
      // Форматуємо дату для пошуку
      const formattedDay = `${selectedMonth}-${(dayIndex + 1)
        .toString()
        .padStart(2, '0')}`;
      const dayData = monthData.find(data =>
        data.date.startsWith(formattedDay),
      );
      return {
        day: dayIndex + 1,
        percentage: dayData ? dayData.waterVolumePercentage : 0,
        isHighlighted: dayData && dayData.waterVolumePercentage < 100,
      };
    });
  }, [monthData, selectedMonth]);

  // Функція для зміни місяця
  const changeMonth = direction => {
    const date = new Date(selectedMonth);

    if (direction === 'prev') {
      date.setMonth(date.getMonth() - 1);
    } else {
      date.setMonth(date.getMonth() + 1);
    }

    const newMonth = `${date.getFullYear()}-${String(
      date.getMonth() + 1,
    ).padStart(2, '0')}`;
    setSelectedMonth(newMonth);

    // Перевіряємо, чи новий місяць є поточним місяцем
    const currentMonth = getCurrentMonth();
    if (newMonth === currentMonth) {
      setActiveButton(null); // Скидаємо активну кнопку
    } else {
      setActiveButton(direction); // Встановлюємо активну кнопку
    }
  };

  // Обробник кліка по дню
  const onDayClick = day => {
    // Форматуємо дату для пошуку
    const formattedDay = `${selectedMonth}-${day.toString().padStart(2, '0')}`;
    const dayData = monthData.find(data => data.date.startsWith(formattedDay));

    if (dayData) {
      if (selectedDayStats && selectedDayStats.date === dayData.date) {
        // Якщо клік по тому ж дню, закриваємо вікно
        handleCloseModal();
      } else {
        // В іншому випадку, відкриваємо вікно з новими даними
        setSelectedDayStats(dayData);
        setModalVisible(true);

        // Встановлення позиції модального вікна
        const dayElement = dayRefs.current[day];
        if (dayElement) {
          const rect = dayElement.getBoundingClientRect();
          setDayPosition({
            top: rect.top + window.scrollY,
            left: rect.left,
            width: rect.width,
          });
        }
      }
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedDayStats(null);
  };

  const dayRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        modalVisible &&
        !dayRefs.current[selectedDayStats.day]?.contains(event.target)
      ) {
        handleCloseModal();
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
            onClick={() => changeMonth('prev')}
            active={activeButton === 'next'}
          >
            &lt;
          </ButtonPaginator>
          <span>{formatMonth(selectedMonth)}</span>
          {isHovering && <Year>{selectedMonth.split('-')[0]}</Year>}
          <ButtonPaginator
            onClick={() => changeMonth('next')}
            active={activeButton === 'prev'}
          >
            &gt;
          </ButtonPaginator>
        </Paginator>
      </HeaderMonth>

      {selectedDayStats && (
        <DaysGeneralStats
          stats={selectedDayStats}
          position={dayPosition}
          onClose={handleCloseModal}
          onShow={modalVisible}
        />
      )}

      <DaysList>
        {daysWithData.map(({ day, percentage, isHighlighted }) => (
          <div key={day}>
            <DaysPercentage>
              <DaysButton
                ref={el => (dayRefs.current[day] = el)}
                onClick={() => onDayClick(day)}
                isHighlighted={isHighlighted}
              >
                {day}
              </DaysButton>
              <span>{Math.round(percentage)}%</span>
            </DaysPercentage>
          </div>
        ))}
      </DaysList>
    </div>
  );
};
