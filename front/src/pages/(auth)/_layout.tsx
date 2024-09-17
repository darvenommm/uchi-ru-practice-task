import { createFileRoute, Outlet } from '@tanstack/react-router';
import { styled } from '@linaria/react';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const Layout = (): JSX.Element => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};

export const Route = createFileRoute('/(auth)/_layout')({
  component: Layout,
});
