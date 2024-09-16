import { QueryClient } from './QueryClient';
import { Router } from './Router';
import { GlobalsStyles } from './styles/global';

export const App = (): JSX.Element => {
  return (
    <GlobalsStyles>
      <QueryClient>
        <Router />
      </QueryClient>
    </GlobalsStyles>
  );
};
