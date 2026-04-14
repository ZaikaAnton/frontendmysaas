import { type ReactNode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { router } from '../router';
import { queryClient } from './QueryClientProvider';
import { SidebarProvider } from '@/shared/ui/sidebar';

interface AppProvidersProps {
  children?: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {children}
      </QueryClientProvider>
    </SidebarProvider>
  );
}
