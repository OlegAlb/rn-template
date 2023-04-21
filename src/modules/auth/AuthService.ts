import { modelFactory } from '../../base/ModelFactory';
import { AuthAccess } from './models/AuthAccess';
import AuthApiRepository from './repositories/AuthApiRepository';

export default class AuthService {
  authApi: AuthApiRepository;

  constructor() {
    this.authApi = new AuthApiRepository();
  }

  registerUser = async (postData: any): Promise<AuthAccess> => {
    const { data } = await this.authApi.registerUser(postData);
    return modelFactory.create<AuthAccess>(AuthAccess, data?.data);
  };

  login = async (smsSessionToken: string, smsCode: string): Promise<AuthAccess> => {
    const { data } = await this.authApi.login(smsSessionToken, smsCode);
    return modelFactory.create<AuthAccess>(AuthAccess, data?.data);
  };

  logout = async () => {
    const { data } = await this.authApi.logout();
    return data;
  };
}
