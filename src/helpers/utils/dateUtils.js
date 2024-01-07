import { format } from 'date-fns';

export function formatDate(dateString, formatString = 'yyyy-MM-dd ') {
  const date = new Date(dateString);
  return format(date, formatString);
}
