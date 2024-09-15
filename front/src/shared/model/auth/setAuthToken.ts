import { AUTH_TOKEN_KEY } from './constants';

export const setAuthToken = (newAuthToken: string): void => {
  localStorage.setItem(AUTH_TOKEN_KEY, newAuthToken);
};
