import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Header } from '@/widgets/Header';
import { Container } from '@/shared/ui/styles';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export const Route = createFileRoute('/(app)/_layout')({
  component: Layout,
});
