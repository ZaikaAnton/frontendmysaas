import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Field } from '@/shared/ui/field';
import { Button } from '@/shared/ui/button';
import { FormDateRange, FormInput } from '@/shared/ui/form';
import { filterSchema, type FilterFormValues } from './model/schema';
import { useMessageFilter } from './lib/useMessageFilter';

export const MessageFilterForm = () => {
  const { applyFilter, filter: initialFilter, resetFilter } = useMessageFilter();

  const form = useForm<FilterFormValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      channel: initialFilter.channel,
      searchWord: initialFilter.searchWord,
      dateRange: initialFilter.dateRange,
    },
  });

  const onSubmit = (data: FilterFormValues) => {
    applyFilter(data);
  };

  const onReset = () => {
    form.reset({
      channel: '',
      searchWord: '',
      dateRange: initialFilter.dateRange,
    });

    resetFilter();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Field orientation="horizontal">
        <FormInput name="channel" control={form.control} placeholder="Введите название канала" />
        <FormInput name="searchWord" control={form.control} placeholder="Введите ключевое слово" />
        <FormDateRange name="dateRange" control={form.control} />

        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={onReset}>
            Сбросить
          </Button>
          <Button type="submit">Применить</Button>
        </Field>
      </Field>
    </form>
  );
};
