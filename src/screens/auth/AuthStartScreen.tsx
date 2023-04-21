import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Navigation from '../../base/Navigation';
import { Button } from '../../components/Button';
import { useRootStore } from '../../hooks/useRootStore';
import { Screens } from '../../navigation/consts/screens';

export const AuthStartScreen = observer(() => {
  const { mainStore } = useRootStore();

  useEffect(() => {
    mainStore.init();
  }, [mainStore]);

  const handleNavigation = () => {
    Navigation.replace(Screens.MAIN_APP, { screen: Screens.HOME_MAIN });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerButton}>
        <Button title="Войти в приложение" onPress={handleNavigation} />
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerButton: {
    padding: 16,
  },
});
