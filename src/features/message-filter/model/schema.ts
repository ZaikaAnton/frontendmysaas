import { z } from 'zod';

const dateRangeSchema = z
  .object({
    from: z.date().or(z.undefined()),
    to: z.date().or(z.undefined()),
  })
  .refine((value) => Boolean(value.from && value.to), {
    message: 'Выберите период',
  });

export const filterSchema = z.object({
  channel: z.string().min(1, 'Укажите канал'),
  searchWord: z.string().min(1, 'Введите ключевое слово'),
  dateRange: dateRangeSchema,
});

export type FilterFormValues = z.infer<typeof filterSchema>;
