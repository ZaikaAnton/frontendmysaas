import { useSearchParams } from 'react-router-dom';
import type { FilterFormValues } from '../model/schema';

export const useMessageFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getFilterFromUrl = (): FilterFormValues => ({
    channel: searchParams.get('channel') || '',
    searchWord: searchParams.get('searchWord') || '',
    dateRange: {
      from: searchParams.get('startDate') ? new Date(searchParams.get('startDate')!) : new Date(),
      to: searchParams.get('endDate') ? new Date(searchParams.get('endDate')!) : new Date(),
    },
  });

  const applyFilter = (data: FilterFormValues) => {
    setSearchParams({
      channel: data.channel,
      searchWord: data.searchWord,
      startDate: data.dateRange.from.toISOString().split('T')[0],
      endDate: data.dateRange.to.toISOString().split('T')[0],
    });
  };

  return { filter: getFilterFromUrl(), applyFilter };
};
