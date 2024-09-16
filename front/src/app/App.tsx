import { QueryClient } from './QueryClient';
import { Router } from './Router';

export const App = (): JSX.Element => {
  return (
    <QueryClient>
      <Router />
    </QueryClient>
  );
};
