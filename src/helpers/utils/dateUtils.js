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

export function formatDate(dateString, formatString = 'yyyy-MM-dd ') {
  const date = new Date(dateString);
  return format(date, formatString);
}
