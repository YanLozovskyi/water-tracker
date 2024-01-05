import { format } from 'date-fns';

export function formatTime(isoDate) {
  return new Date(isoDate).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

export function formatTimeForInput(isoDate) {
  return new Date(isoDate).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

export const formatMonth = monthYearString => {
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

export function formatDate(dateString, formatString = 'yyyy-MM-dd ') {
  const date = new Date(dateString);
  return format(date, formatString);
}

export function getCurrentMonth() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

export const daysInMonth = month => {
  const [year, monthIndex] = month.split('-').map(Number);
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const daysInFeb = isLeapYear ? 29 : 28;
  const daysPerMonth = [31, daysInFeb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return daysPerMonth[monthIndex - 1];
};
