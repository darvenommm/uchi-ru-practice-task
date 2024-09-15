import { createFileRoute, Outlet } from '@tanstack/react-router';

const Layout = (): JSX.Element => {
  return (
    <main>
      <div>App</div>
      <Outlet />
    </main>
  );
};

export const Route = createFileRoute('/(app)/_layout')({
  component: Layout,
});
