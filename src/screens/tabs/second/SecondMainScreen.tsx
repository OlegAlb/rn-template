import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Navigation from '../../../base/Navigation';
import { useRootStore } from '../../../hooks/useRootStore';
import { Screens } from '../../../navigation/consts/screens';

interface SecondMainProps {}

export const SecondMainScreen = observer(({}: SecondMainProps) => {
  const { userStore } = useRootStore();

  useEffect(() => {
    userStore.init();

    setTimeout(() => {
      userStore.changeUser();
    }, 2000);
  }, []);

  const handleOnPress = () => {
    Navigation.navigate(Screens.SECOND_DETAIL);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleOnPress}>
        <Text>Second main Screen</Text>

        {userStore.user ? (
          <View>
            <Text>User full name: {userStore.user.fullName}</Text>
            <Text>User phone: {userStore.user.phone}</Text>
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({});
