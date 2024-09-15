import { createFileRoute } from '@tanstack/react-router';

import { redirectToEntryIfNotAuth } from '@/shared/model/auth';

const Component = (): JSX.Element => {
  return <div>Liked Cats</div>;
};

export const Route = createFileRoute('/(app)/_layout/liked-cats/')({
  component: Component,
  beforeLoad: redirectToEntryIfNotAuth,
});
