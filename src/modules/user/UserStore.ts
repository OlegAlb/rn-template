import { makeAutoObservable } from 'mobx';

import { Nullable } from '../../base/types/BaseTypes';
import UserService from './UserService';
import { User } from './models/User';

export class UserStore {
  userLoader: boolean = false;
  user: Nullable<User> = null;

  private userService: UserService;

  constructor() {
    makeAutoObservable(this);

    this.userService = new UserService();
  }

  init = () => {
    // example for default empty object
    this.setUser(this.userService.createEmpty());
  };

  changeUser = () => {
    this.setUser(this.userService.changeUser());
  };

  setLoading = (value: boolean) => {
    this.userLoader = value;
  };

  setUser = (user: User) => {
    this.user = user;
  };
}
