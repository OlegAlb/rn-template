import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { SecondDetailScreen } from '../../screens/tabs/second/SecondDetailScreen';
import { SecondMainScreen } from '../../screens/tabs/second/SecondMainScreen';
import { Screens } from '../consts/screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.SECOND_MAIN} component={SecondMainScreen} options={{ headerShown: false }} />
      <Stack.Screen name={Screens.SECOND_DETAIL} component={SecondDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
