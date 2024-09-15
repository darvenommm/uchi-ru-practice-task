import { redirect } from '@tanstack/react-router';

import { getAuthToken } from '../token/getAuthToken';

export const redirectIfNotAuth = async (): Promise<never | void> => {
  if (!getAuthToken()) {
    throw redirect({ to: '/entry' });
  }
};
