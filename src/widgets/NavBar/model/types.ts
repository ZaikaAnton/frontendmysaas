import type { LucideIcon } from 'lucide-react';

export interface MenuItem {
  path: string;
  label: string;
  icon: LucideIcon;
}
export interface MenuGroup {
  label?: string;
  items: MenuItem[];
}
