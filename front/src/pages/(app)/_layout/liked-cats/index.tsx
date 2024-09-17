import { createFileRoute } from '@tanstack/react-router';

import { LikedCats } from '@/widgets/LikedCats';
import { VisuallyHidden } from '@/shared/ui/components/VisuallyHidden';
import { redirectIfNotAuth } from '@/shared/model/auth';

const Component = (): JSX.Element => {
  return (
    <>
      <VisuallyHidden>Все лайкнутые коты.</VisuallyHidden>
      <LikedCats />
    </>
  );
};

export const Route = createFileRoute('/(app)/_layout/liked-cats/')({
  component: Component,
  beforeLoad: redirectIfNotAuth,
});
