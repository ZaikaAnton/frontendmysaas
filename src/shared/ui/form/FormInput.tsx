import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import { Field, FieldError, FieldLabel } from '@/shared/ui/field';
import { Input } from '@/shared/ui/input';
import { cn } from '@/shared/lib/utils';

type InputProps = React.ComponentProps<typeof Input>;

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
} & Omit<InputProps, 'name'>;

export const FormInput = <T extends FieldValues>({
  name,
  control,
  label,
  id,
  className,
  ...props
}: FormInputProps<T>) => {
  const inputId = id ?? name;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className="relative">
          {label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}
          <Input
            {...field}
            {...props}
            id={inputId}
            aria-invalid={fieldState.invalid}
            className={cn(fieldState.invalid && 'border-destructive focus-visible:ring-destructive', className)}
          />
          {fieldState.error && (
            <FieldError className="pointer-events-none absolute top-full left-0 mt-1" errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
};
