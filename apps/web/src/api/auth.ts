import { AuthorizationData } from '../types/authorization-data';
import { AuthorizationToken } from '../types/token';
import { getAuthorizationInformation } from './repository';

const SIGN_IN_PATH = 'auth/login';
const SIGN_UP_PATH = 'auth/signup';

export const logUser = async (
  params: Pick<AuthorizationData, 'email' | 'password'>,
) => {
  const response = await getAuthorizationInformation<
    AuthorizationToken,
    Pick<AuthorizationData, 'email' | 'password'>
  >(`${SIGN_IN_PATH}`, params);

  return response;
};

export const registerUser = async (params: AuthorizationData) => {
  const response = await getAuthorizationInformation<
    AuthorizationToken,
    AuthorizationData
  >(`${SIGN_UP_PATH}`, params);

  return response;
};
