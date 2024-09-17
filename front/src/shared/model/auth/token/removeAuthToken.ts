import { AUTH_TOKEN_KEY } from './constants';

export const removeAuthToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};
