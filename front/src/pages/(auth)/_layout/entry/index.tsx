import { createFileRoute } from '@tanstack/react-router';

const Component = (): JSX.Element => {
  return <div>Entry</div>;
};

export const Route = createFileRoute('/(auth)/_layout/entry/')({
  component: Component,
});
