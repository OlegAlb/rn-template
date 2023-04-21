import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from 'react';

import Navigation from '../../base/Navigation';
import { Screens } from '../consts/screens';
import { Tabs } from '../consts/tabs';
import HomeStack from '../stacks/HomeStack';
// import KitStack from '../stacks/KitStack';
import SecondStack from '../stacks/SecondStack';

const Tab = createBottomTabNavigator();

const getTabBarVisible = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const hideOnScreens = [Screens.SECOND_DETAIL];

  if (!routeName) {
    return 'flex';
  }

  return hideOnScreens.toString().includes(routeName) ? 'none' : 'flex';
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={Navigation.initialRoute}>
      <Tab.Screen
        name={Tabs.TAB_HOME}
        component={HomeStack}
        options={{
          tabBarLabel: 'Main',
          // tabBarIcon: ({ focused }) => (focused ? <FocusedIcon /> : <Icon />),
        }}
      />

      <Tab.Screen
        name={Tabs.TAB_SECOND}
        component={SecondStack}
        options={({ route }) => ({
          tabBarLabel: 'second',
          // tabBarIcon: ({ focused }) => (focused ? <FocusedIcon /> : <Icon />),
          tabBarStyle: { display: getTabBarVisible(route) },
        })}
      />

      {/* <Tab.Screen
        name={screens.tab.TAB_KIT}
        component={KitStack}
        options={({ route }) => ({
          tabBarLabel: 'UIKit',
          // tabBarIcon: ({ focused }) => (focused ? <FocusedIcon /> : <Icon />),
          tabBarVisible: getTabBarVisible(route),
        })}
      /> */}
    </Tab.Navigator>
  );
};
