import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '../styles/Colors';
import { Switch } from './Switch';
import { Ag, Text } from './Text';

interface ISwitchWithTextProps {
  text: string;
  active: boolean;
  onValueChange: (value: boolean) => void;
  withPadding?: boolean; // проставить если есть divider снизу
  withDivider?: boolean;
}

export const SwitchWithText = ({ text, active, onValueChange, withPadding, withDivider }: ISwitchWithTextProps) => {
  return (
    <View style={[styles.container, withPadding && { paddingHorizontal: 16 }, withDivider && styles.divider]}>
      <Text ag={Ag.Body1} style={styles.text}>
        {text}
      </Text>
      <Switch active={active} onValueChange={onValueChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 64,
  },
  text: {
    flex: 1,
    paddingRight: 16,
  },
  divider: {
    borderBottomColor: Colors.shadow,
    borderBottomWidth: 1,
  },
});
