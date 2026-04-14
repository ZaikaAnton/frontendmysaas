import { Home, Settings, Podcast } from 'lucide-react';
import type { MenuGroup } from './types';
import { ROUTES } from '@/shared/config/routes';

export const MAIN_MENU_GROUPS: MenuGroup[] = [
  {
    items: [{ path: ROUTES.HOME, label: 'Главная', icon: Home }],
  },
  {
    label: 'Посты',
    items: [{ path: ROUTES.POSTS, label: 'Сообщения', icon: Podcast }],
  },
  {
    label: 'Настройки',
    items: [{ path: ROUTES.SETTINGS, label: 'Общие', icon: Settings }],
  },
];
