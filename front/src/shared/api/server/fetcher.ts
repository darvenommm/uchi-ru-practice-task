import { redirect } from '@tanstack/react-router';
import { StatusCodes } from 'http-status-codes';
import ky from 'ky';

import { SERVER_URL } from './constants';
import { getAuthToken } from '@/shared/model/auth';

import type { HTTPError } from 'ky';

export const fetcher = ky.create({
  prefixUrl: SERVER_URL,
  hooks: {
    beforeRequest: [
      async (request): Promise<void> => {
        request.headers.append('x-auth-token', getAuthToken() ?? '');
      },
    ],
    beforeError: [
      (error): HTTPError => {
        if (error.response.status === StatusCodes.UNAUTHORIZED) {
          throw redirect({ to: '/entry' });
        }

        return error;
      },
    ],
  },
});
