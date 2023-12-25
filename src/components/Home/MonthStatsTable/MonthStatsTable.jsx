import React, { useState, useEffect, useMemo } from 'react';
import { DaysGeneralStats } from '../DaysGeneralStats/DaysGeneralStats';

import {
  Paginator,
  ButtonPaginator,
  HeaderMonth,
  BoxMonth,
  DaysList,
  DaysButton,
  DaysPercentage,
  Year,
} from './MonthStatsTable.styled';

const getCurrentMonth = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
};

// Функція для перетворення формату "рік-місяць" у назву місяця
const formatMonth = monthYearString => {
  const [year, month] = monthYearString.split('-').map(Number);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthNames[month - 1];
};

export const MonthStatsTable = () => {
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
  const [dailyStats, setDailyStats] = useState([]);
  const [selectedDayStats, setSelectedDayStats] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

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
    const dayStats = dailyStats.find(stat => stat.day === day);
    setSelectedDayStats(dayStats);
  };

  useEffect(() => {
    fetchDataForMonth(selectedMonth);
  }, [selectedMonth]);

  // Для прикладу
  useEffect(() => {
    setDailyStats([
      { day: 15, percentage: 100 },
      { day: 16, percentage: 60 },
      { day: 17, percentage: 100 },
      { day: 18, percentage: 60 },
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

  return (
    <BoxMonth>
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
        <DaysGeneralStats day={selectedDayStats.day} stats={selectedDayStats} />
      )}

      <DaysList>
        {daysWithData.map(({ day, percentage, isHighlighted }) => (
          <div key={day}>
            <DaysPercentage>
              <DaysButton
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
    </BoxMonth>
  );
};
