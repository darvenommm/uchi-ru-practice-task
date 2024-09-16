import { QueryClient as Client, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from '@tanstack/react-router';

interface IQueryClientProps {
  children: ReactNode | ReactNode[];
}

const queryClient = new Client();

export const QueryClient = ({ children }: IQueryClientProps): JSX.Element => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
