import { useQuery } from '@tanstack/react-query';
import { telegramControllerGetMessagesInRangeOptions } from '@/shared/api';
import { useMessageFilter } from '../lib/useMessageFilter';

export const useMessagesQuery = () => {
  const { filter } = useMessageFilter();

  const apiParams = {
    channel: filter.channel,
    searchWord: filter.searchWord,
    startDate: filter.dateRange.from.toISOString().split('T')[0],
    endDate: filter.dateRange.to.toISOString().split('T')[0],
  };

  return useQuery({
    ...telegramControllerGetMessagesInRangeOptions({ query: apiParams }),
    enabled: Boolean(apiParams.channel && apiParams.searchWord),
  });
};
