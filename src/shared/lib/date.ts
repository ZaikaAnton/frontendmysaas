import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const DateFormat = {
  DayMonthYearShort: 'dd LLL y',
} as const;

export type DateFormat = (typeof DateFormat)[keyof typeof DateFormat];

export function formatDate(date: Date, dateFormat: DateFormat): string {
  return format(date, dateFormat, { locale: ru });
}
