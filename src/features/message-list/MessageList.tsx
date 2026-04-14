import { MessageCard } from '@/entities/message';
import { useMessagesQuery } from '../message-filter/model/useMessagesQuery';

export const MessageList = () => {
  const { data, isLoading, error } = useMessagesQuery();

  if (isLoading) return <div>Загрузка сообщений...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;
  if (!data || data.length === 0) return <div>Сообщений не найдено</div>;

  return (
    <div className="space-y-4">
      {data.map((msg) => (
        <MessageCard key={msg.id} message={msg} />
      ))}
    </div>
  );
};
