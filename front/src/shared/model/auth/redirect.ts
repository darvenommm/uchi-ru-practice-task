import { redirect } from '@tanstack/react-router';

import { getAuthToken } from './getAuthToken';

export const redirectToEntryIfNotAuth = async (): Promise<never | void> => {
  if (!getAuthToken()) {
    throw redirect({ to: '/entry' });
  }
};
