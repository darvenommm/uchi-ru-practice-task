import { createFileRoute } from '@tanstack/react-router';

import { Cats } from '@/widgets/Cats';
import { VisuallyHidden } from '@/shared/ui/components/VisuallyHidden';
import { redirectIfNotAuth } from '@/shared/model/auth';
import { useQueryClient } from '@tanstack/react-query';
import { CATS_QUERY_KEY } from '@/entities/cats';

const Component = (): JSX.Element => {
  const queryClient = useQueryClient();

  queryClient.removeQueries({ queryKey: [CATS_QUERY_KEY] });

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
