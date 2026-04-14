import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import type { DateRange } from 'react-day-picker';
import { ru } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';
import { Field, FieldError, FieldLabel } from '@/shared/ui/field';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { cn } from '@/shared/lib/utils';
import { DateFormat, formatDate } from '@/shared/lib/date';

type FormDateRangeProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  id?: string;
  className?: string;
  numberOfMonths?: number;
};

export const FormDateRange = <T extends FieldValues>({
  name,
  control,
  label,
  id,
  className,
  numberOfMonths = 2,
}: FormDateRangeProps<T>) => {
  const inputId = id ?? name;

  const getDateLabel = (value: DateRange | undefined): string => {
    const formattedFromDate = value?.from ? formatDate(value.from, DateFormat.DayMonthYearShort) : undefined;
    const formattedToDate = value?.to ? formatDate(value.to, DateFormat.DayMonthYearShort) : undefined;

    return [formattedFromDate, formattedToDate].filter(Boolean).join(' - ');
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const selectedDateRange = field.value as DateRange | undefined;
        const dateLabel = getDateLabel(selectedDateRange);

        return (
          <Field data-invalid={fieldState.invalid} className="relative">
            {label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  id={inputId}
                  className={cn(
                    'justify-start px-2.5 font-normal',
                    fieldState.invalid && 'border-destructive focus-visible:ring-destructive',
                    className,
                  )}
                  aria-invalid={fieldState.invalid}
                >
                  <CalendarIcon data-icon="inline-start" />
                  {dateLabel && <span>{dateLabel}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  defaultMonth={selectedDateRange?.from}
                  selected={selectedDateRange}
                  onSelect={(range) => field.onChange(range ?? { from: undefined, to: undefined })}
                  numberOfMonths={numberOfMonths}
                  locale={ru}
                  className="[--cell-size:2.5rem] p-3"
                />
              </PopoverContent>
            </Popover>
            {fieldState.error && (
              <FieldError className="pointer-events-none absolute top-full left-0 mt-1" errors={[fieldState.error]} />
            )}
          </Field>
        );
      }}
    />
  );
};
