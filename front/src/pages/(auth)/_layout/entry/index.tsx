import { createFileRoute } from '@tanstack/react-router';

import { EntryForm } from '@/widgets/EntryForm';

const Component = (): JSX.Element => {
  return <EntryForm />;
};

export const Route = createFileRoute('/(auth)/_layout/entry/')({
  component: Component,
});
