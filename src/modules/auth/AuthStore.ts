import { action, makeAutoObservable } from 'mobx';

import { Nullable } from '../../base/types/BaseTypes';
import AuthService from './AuthService';
import TokenService from './modules/token/TokenService';

export class AuthStore {
  authInitialLoader: boolean = true;
  authLoader: boolean = false;

  smsSessionToken: any = null;
  smsCode: string = '';

  accessToken: Nullable<string> = null;

  private authService: AuthService;
  private tokenService: TokenService;

  constructor() {
    makeAutoObservable(this);
    this.authService = new AuthService();
    this.tokenService = new TokenService();
  }

  authLogin = (smsCode: string) => {
    this.setLoading(true);

    return this.authService
      .login(this.smsSessionToken, smsCode)
      .then(async res => {
        if (res.accessToken) {
          await this.tokenService.saveToken(res.accessToken);
          this.accessToken = res.accessToken;

          return true;
        }
      })
      .catch(e => {
        console.log(e);
        return false;
      })
      .finally(() => this.setLoading(false));
  };

  logout = async () => {
    this.setLoading(true);
    this.authService
      .logout()
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(
        action(async () => {
          await this.tokenService.deleteToken();

          this.accessToken = null;
          this.setLoading(false);
        }),
      );
  };

  setLoading = (value: boolean) => {
    this.authLoader = value;
  };

  setInitialLoading = (value: boolean) => {
    this.authInitialLoader = value;
  };
}
