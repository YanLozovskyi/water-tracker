import { addHours, format, parseISO } from 'date-fns';

export function formatDate(dateString, formatString = 'yyyy-MM-dd ') {
  const date = new Date(dateString);
  return format(date, formatString);
}

export function formatCustomTime(dateString, formatString = 'h:mm a') {
  const date = addHours(parseISO(dateString), -2);
  return format(date, formatString);
}
