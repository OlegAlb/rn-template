import CheckBox from '@react-native-community/checkbox';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Platform, StyleSheet, ViewStyle } from 'react-native';

import { Colors } from '../styles/Colors';

interface ICheckboxProps {
  value: boolean;
  onChange: (val: boolean) => void;
  style?: ViewStyle;
  disabled?: boolean;
  fillColor?: string;
  checkColor?: string;
}

export const Checkbox = observer(
  ({
    style,
    value,
    onChange,
    disabled = false,
    fillColor = Colors.primary,
    checkColor = Colors.white,
  }: ICheckboxProps) => {
    return Platform.OS === 'ios' ? (
      <CheckBox
        value={value}
        disabled={disabled}
        style={[styles.iosCheckBox, style]}
        onValueChange={onChange}
        // Only iOS
        lineWidth={2}
        hideBox={false}
        boxType={'circle'}
        onFillColor={fillColor}
        onCheckColor={checkColor}
        onTintColor={Colors.primary}
        tintColor={value ? Colors.primary : Colors.outline}
        animationDuration={0.1}
        onAnimationType={'bounce'}
        offAnimationType={'bounce'}
      />
    ) : (
      <CheckBox
        disabled={disabled}
        // Only Android
        tintColors={{
          true: Colors.primary,
          false: Colors.outline,
        }}
        value={value}
        onValueChange={onChange}
      />
    );
  },
);

const styles = StyleSheet.create({
  iosCheckBox: {
    width: 24,
    height: 24,
    marginVertical: 4,
    marginRight: 8,
  },
});
