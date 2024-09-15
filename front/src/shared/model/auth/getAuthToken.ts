import { AUTH_TOKEN_KEY } from './constants';

export const getAuthToken = (): null | string => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};
