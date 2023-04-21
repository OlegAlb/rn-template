import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Navigation from '../base/Navigation';
import { Colors } from '../styles/Colors';
import { Ag, Align, Text } from './Text';
import { BackIcon } from './icons/BackIcon';

interface IHeaderProps {
  title?: string;
  showBack?: boolean;
  rightComponent?: ReactNode;
}

export const Header = ({ showBack, title, rightComponent }: IHeaderProps) => {
  const insets = useSafeAreaInsets();

  const handleBackNavigation = () => {
    Navigation.pop();
  };

  return (
    <View style={[styles.header, { height: 56 + insets.top, paddingTop: insets.top }]}>
      <View style={styles.headerSide}>
        {showBack && (
          <TouchableOpacity onPress={handleBackNavigation}>
            <BackIcon />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.headerCenter}>
        {title?.length !== 0 && (
          <Text ag={Ag.Body1} align={Align.Center}>
            {title}
          </Text>
        )}
      </View>

      <View style={styles.headerSide}>{rightComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 44,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.shadow,
  },
  headerCenter: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerSide: {
    width: 24,
  },
});
