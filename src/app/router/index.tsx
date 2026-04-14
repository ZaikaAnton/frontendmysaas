import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/app/layouts/MainLayout';
import { ROUTES } from '@/shared/config/routes';

const HomePage = lazy(() => import('@/pages/home'));
const PostsPage = lazy(() => import('@/pages/posts'));

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.POSTS.slice(1), element: <PostsPage /> },
      // // другие страницы
    ],
  },
]);
