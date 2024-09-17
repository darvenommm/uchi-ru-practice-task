import { createFileRoute } from '@tanstack/react-router';

import { EntryForm } from '@/widgets/EntryForm';
import { VisuallyHidden } from '@/shared/ui/components/VisuallyHidden';

const Component = (): JSX.Element => {
  return (
    <>
      <VisuallyHidden>Вход в аккаунт.</VisuallyHidden>
      <EntryForm />
    </>
  );
};

export const Route = createFileRoute('/(auth)/_layout/entry/')({
  component: Component,
});
