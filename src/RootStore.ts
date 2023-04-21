import React from 'react';

import { AuthStore } from './modules/auth/AuthStore';
import { MainStore } from './modules/main/MainStore';
import { ToastStore } from './modules/toast/ToastStore';
import { UserStore } from './modules/user/UserStore';

class RootStore {
  authStore: AuthStore;
  userStore: UserStore;
  mainStore: MainStore;
  toastStore: ToastStore;

  constructor() {
    this.toastStore = new ToastStore();
    this.authStore = new AuthStore();
    this.userStore = new UserStore();
    this.mainStore = new MainStore();
  }

  sync = async () => {
    await Promise.all(
      Object.values(this).map(store => {
        return store?.sync ? store?.sync() : Promise.resolve();
      }),
    );
  };
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
