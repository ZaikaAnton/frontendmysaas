import { Card, CardContent, CardHeader } from '@/shared/ui/card';

interface MessageCardProps {
  message: {
    id: number;
    date: string;
    message: string;
    hasMedia: boolean;
  };
}

export const MessageCard = ({ message }: MessageCardProps) => {
  const formattedDate = new Date(message.date).toLocaleString();

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between text-sm text-gray-500">
          <span>ID: {message.id}</span>
          <span>{formattedDate}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap">{message.message}</p>
        {message.hasMedia && <span className="inline-block mt-2 text-xs bg-gray-100 px-2 py-1 rounded">📎 Медиа</span>}
      </CardContent>
    </Card>
  );
};
