import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Header } from '../../components/Header';
import { HomeDetailScreen } from '../../screens/tabs/home/HomeDetailScreen';
import { HomeMainScreen } from '../../screens/tabs/home/HomeMainScreen';
import { Screens } from '../consts/screens';
import { HomeStackParamList } from '../types/HomeStackTypes';

const Stack = createStackNavigator<HomeStackParamList>();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.HOME_MAIN}
        component={HomeMainScreen}
        options={{ header: () => <Header title="Header title" /> }}
      />
      <Stack.Screen
        name={Screens.HOME_DETAIL}
        component={HomeDetailScreen}
        options={{ header: () => <Header showBack title="Forms" /> }}
      />
    </Stack.Navigator>
  );
};
