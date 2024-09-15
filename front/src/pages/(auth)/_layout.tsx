import { createFileRoute, Outlet } from '@tanstack/react-router';

const Layout = (): JSX.Element => {
  return (
    <main>
      <div>Auth</div>
      <Outlet />
    </main>
  );
};

export const Route = createFileRoute('/(auth)/_layout')({
  component: Layout,
});
