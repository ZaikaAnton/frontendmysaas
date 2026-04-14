import { Outlet } from 'react-router-dom';
import { NavBar } from '@/widgets/NavBar';
import { SidebarInset } from '@/shared/ui/sidebar';

export function MainLayout() {
  return (
    <div className="flex h-screen w-full bg-background">
      <NavBar />
      <SidebarInset>
        <main className="h-full overflow-auto p-4 md:p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </div>
  );
}
