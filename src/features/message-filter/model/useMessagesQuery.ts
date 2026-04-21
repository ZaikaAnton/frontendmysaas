import { useQuery } from '@tanstack/react-query';
import { telegramControllerGetMessagesInRangeOptions } from '@/shared/api';
import { useMessageFilter } from '../lib/useMessageFilter';
import { formatDateOnly } from '@/shared/lib/date';

export const useMessagesQuery = () => {
  const { filter } = useMessageFilter();

  const apiParams = {
    channel: filter.channel,
    searchWord: filter.searchWord,
    startDate: formatDateOnly(filter.dateRange.from),
    endDate: formatDateOnly(filter.dateRange.to),
  };

  return useQuery({
    ...telegramControllerGetMessagesInRangeOptions({
      query: apiParams,
    }),
    enabled: Boolean(filter.channel && filter.searchWord),
  });
};
