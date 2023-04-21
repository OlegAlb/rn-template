import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Header } from '../../components/Header';
import { UiKitScreen } from '../../screens/tabs/kit/UiKitScreen';
import { Screens } from '../consts/screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.KIT_MAIN}
        component={UiKitScreen}
        options={{ header: () => <Header showBack title="UI Kit" /> }}
      />
    </Stack.Navigator>
  );
};
