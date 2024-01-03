import { useEffect, useMemo, useRef, useState } from 'react';
import { formatMonth } from '../../../helpers/utils/dateUtils';
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

const getCurrentMonth = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
};

export const MonthStatsTable = () => {
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
  const [dailyStats, setDailyStats] = useState([]);
  const [selectedDayStats, setSelectedDayStats] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [dayPosition, setDayPosition] = useState({ top: 0, left: 0, width: 0 });
  const [modalVisible, setModalVisible] = useState(false);

  // Функція, яка повертає кількість днів у місяці
  const daysInMonth = month => {
    const [year, monthIndex] = month.split('-').map(Number);
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    const daysInFeb = isLeapYear ? 29 : 28;
    const daysPerMonth = [
      31,
      daysInFeb,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    return daysPerMonth[monthIndex - 1];
  };

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

  // Функція для завантаження даних за місяць
  const fetchDataForMonth = async month => {
    // код для запиту даних
    // Приклад: const response = await fetch('/api/data?month=' + month);
    // setDailyStats(response.data);
  };

  // Обробник кліка по дню
  const onDayClick = day => {
    setModalVisible(true);
    // Якщо модальне вікно вже відкрите то закриваємо його
    if (selectedDayStats && selectedDayStats.day === day) {
      setSelectedDayStats(null);
      return;
    }
    // Логіка для відкриття модального вікна
    const dayElement = dayRefs.current[day];
    if (dayElement) {
      const rect = dayElement.getBoundingClientRect();
      setDayPosition({
        top: rect.top + window.scrollY,
        left: rect.left,
        width: rect.width,
      });
      setSelectedDayStats({
        day,
        ...dailyStats.find(stat => stat.day === day),
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        selectedDayStats &&
        !dayRefs.current[selectedDayStats.day].contains(event.target)
      ) {
        handleCloseModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedDayStats]);

  useEffect(() => {
    fetchDataForMonth(selectedMonth);
  }, [selectedMonth]);

  // Для прикладу
  useEffect(() => {
    setDailyStats([
      { day: 2, percentage: 60 },
      { day: 10, percentage: 100 },
      { day: 15, percentage: 100 },
      { day: 29, percentage: 60 },
    ]);
  }, []);

  // useMemo для обчислення стану для кожного дня
  const daysWithData = useMemo(() => {
    return [...Array(daysInMonth(selectedMonth)).keys()].map(dayIndex => {
      const dayData = dailyStats.find(stat => stat.day === dayIndex + 1);
      return {
        day: dayIndex + 1,
        percentage: dayData ? dayData.percentage : 0, // Встановлюємо 0, якщо немає даних
        isHighlighted: dayData && dayData.percentage < 100,
      };
    });
  }, [dailyStats, selectedMonth]);

  const dayRefs = useRef({});

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedDayStats(null);
  };

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
          day={selectedDayStats.day}
          month={selectedMonth}
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
              <span>{percentage}%</span> {/* Відображення відсотка */}
            </DaysPercentage>
          </div>
        ))}
      </DaysList>
    </div>
  );
};
