import { createFileRoute } from '@tanstack/react-router';

import { LikedCats } from '@/widgets/LikedCats';
import { redirectIfNotAuth } from '@/shared/model/auth';

const Component = (): JSX.Element => {
  return <LikedCats />;
};

export const Route = createFileRoute('/(app)/_layout/liked-cats/')({
  component: Component,
  beforeLoad: redirectIfNotAuth,
});
