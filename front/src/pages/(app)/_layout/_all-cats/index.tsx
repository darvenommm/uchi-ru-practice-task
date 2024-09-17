import { createFileRoute } from '@tanstack/react-router';

import { Cats } from '@/widgets/Cats';
import { VisuallyHidden } from '@/shared/ui/components/VisuallyHidden';
import { redirectIfNotAuth } from '@/shared/model/auth';

const Component = (): JSX.Element => {
  return (
    <>
      <VisuallyHidden>Все коты.</VisuallyHidden>
      <Cats />
    </>
  );
};

export const Route = createFileRoute('/(app)/_layout/_all-cats/')({
  component: Component,
  beforeLoad: redirectIfNotAuth,
});
