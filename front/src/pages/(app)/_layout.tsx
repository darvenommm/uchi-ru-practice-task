import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Header } from '@/widgets/Header';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export const Route = createFileRoute('/(app)/_layout')({
  component: Layout,
});
