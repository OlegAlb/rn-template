import { NavigationContainerRef } from '@react-navigation/core';
import * as React from 'react';

import { Tabs } from '../navigation/consts/tabs';

export interface NavigationParams {
  [key: string]: any;
}

export default class Navigation {
  static navigationRef = React.createRef<NavigationContainerRef<any>>();

  static initialRoute: string = Tabs.TAB_HOME;

  static setInitialRoute = (route: string) => {
    this.initialRoute = route;
  };

  static navigate = <ParamList extends {}>(
      routeName: string | keyof ParamList,
      params?: ParamList[keyof ParamList] | { screen: keyof ParamList; params?: ParamList[keyof ParamList] },
  ) => {
    // https://github.com/react-navigation/react-navigation/issues/6879
    setTimeout(() => this.navigationRef.current?.navigate(routeName, params), 0);
  };

  static replace = (routeName: string, params?: NavigationParams) => {
    // https://github.com/react-navigation/react-navigation/issues/6879
    setTimeout(
      () =>
        this.navigationRef.current?.reset({
          index: 0,
          routes: [{ name: routeName, params: params }],
        }),
      0,
    );
  };

  static pop = () => {
    this.navigationRef.current?.goBack();
  };

  static pop2 = () => {
    this.pop();
    this.pop();
  };
}
