import { MessageFilterForm } from '@/features/message-filter';
import { MessageList } from '@/features/message-list';

const PostsPage = () => (
  <>
    <MessageFilterForm />
    <MessageList />
  </>
);

export default PostsPage;
