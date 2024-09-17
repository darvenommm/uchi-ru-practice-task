import { createFileRoute, Outlet } from '@tanstack/react-router';
import { css } from '@linaria/core';

import { Header } from '@/widgets/Header';
import { Container } from '@/shared/ui/components/Container';

const header = css`
  margin-bottom: 52px;
`;

const Layout = (): JSX.Element => {
  return (
    <>
      <Header className={header} />
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
