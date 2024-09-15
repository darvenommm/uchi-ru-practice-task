import { createRootRoute, Outlet } from '@tanstack/react-router';

const Root = (): JSX.Element => <Outlet />;

export const Route = createRootRoute({
  component: Root,
});
