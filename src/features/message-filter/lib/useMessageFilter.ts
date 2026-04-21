import { useSearchParams } from 'react-router-dom';
import type { FilterFormValues } from '../model/schema';
import { formatDateOnly, parseDateOnly } from '@/shared/lib/date';

const today = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

export const useMessageFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filter: FilterFormValues = {
    channel: searchParams.get('channel') || '',
    searchWord: searchParams.get('searchWord') || '',
    dateRange: {
      from: searchParams.get('startDate') ? parseDateOnly(searchParams.get('startDate')!) : today(),

      to: searchParams.get('endDate') ? parseDateOnly(searchParams.get('endDate')!) : today(),
    },
  };

  const applyFilter = (data: FilterFormValues) => {
    setSearchParams({
      channel: data.channel || '',
      searchWord: data.searchWord || '',
      startDate: formatDateOnly(data.dateRange.from),
      endDate: formatDateOnly(data.dateRange.to),
    });
  };

  const resetFilter = () => {
    setSearchParams({});
  };

  return { filter, applyFilter, resetFilter };
};
