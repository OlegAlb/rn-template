import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '../styles/Colors';
import { Fonts } from '../styles/Fonts';
import { Ag, Text } from './Text';

interface IAppVersionModal {
  isVisible: boolean;
}

export const AppVersionModal = ({ isVisible }: IAppVersionModal) => {
  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Text ag={Ag.H3} fontFamily={Fonts.semiBold} style={styles.textCenter}>
          Пожалуйста, обновите ваше приложение до последней версии
        </Text>
        <Text ag={Ag.Body2} style={styles.textDescription}>
          Текущая версия вашего приложения не позволяет использовать новый функционал
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: Colors.white,
  },
  containerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  textDescription: {
    marginTop: 16,
    textAlign: 'center',
  },
});
