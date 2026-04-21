import { format, parse, startOfDay, endOfDay } from 'date-fns';
import { ru } from 'date-fns/locale';

export const DateFormat = {
  DayMonthYearShort: 'dd LLL y',
  YearMonthDay: 'yyyy-MM-dd',
} as const;

export type DateFormat = (typeof DateFormat)[keyof typeof DateFormat];

/**
 * Форматирование даты с локалью
 */
export function formatDate(date: Date, dateFormat: DateFormat): string {
  return format(date, dateFormat, { locale: ru });
}

/**
 * Формат для URL / API (ВАЖНО: без locale)
 * гарантирует стабильный YYYY-MM-DD
 */
export function formatDateOnly(date: Date): string {
  return format(date, DateFormat.YearMonthDay);
}

/**
 * Парсинг YYYY-MM-DD → Date (без UTC-сдвигов)
 */
export function parseDateOnly(value: string): Date {
  return parse(value, DateFormat.YearMonthDay, new Date());
}

/**
 * Начало дня (00:00:00)
 */
export function getStartOfDay(date: Date): Date {
  return startOfDay(date);
}

/**
 * Конец дня (23:59:59.999)
 */
export function getEndOfDay(date: Date): Date {
  return endOfDay(date);
}
