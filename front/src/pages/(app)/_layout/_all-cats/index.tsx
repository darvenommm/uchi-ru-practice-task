import { createFileRoute } from '@tanstack/react-router';

import { redirectToEntryIfNotAuth } from '@/shared/model/auth';

const Component = (): JSX.Element => {
  return <div>All cats</div>;
};

export const Route = createFileRoute('/(app)/_layout/_all-cats/')({
  component: Component,
  beforeLoad: redirectToEntryIfNotAuth,
});
