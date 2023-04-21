import React, { ReactNode, useMemo } from 'react';
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';

import { Colors } from '../styles/Colors';
import { Ag, Text } from './Text';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Flat = 'flat',
}

export enum ButtonSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

interface IButtonProps extends TouchableOpacityProps {
  title?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: ButtonType;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  size?: ButtonSize;
  textColor?: string;
  uppercase?: boolean;
  disabled?: boolean;
}

export const Button = (props: IButtonProps) => {
  const {
    title,
    startIcon,
    endIcon,
    style,
    loading,
    textColor,
    disabled,
    size = ButtonSize.Medium,
    type = ButtonType.Primary,
    uppercase = false,
  } = props;

  const color = useMemo(() => {
    switch (type) {
      case ButtonType.Secondary:
        return textColor || Colors.black;

      case ButtonType.Flat:
        return textColor || Colors.primary;

      default:
        return textColor || Colors.white;
    }
  }, [type, textColor]);

  const buttonStyles = useMemo(() => {
    return [styles.default, styles[type], styles[size], style];
  }, [style, type, size]);

  const renderText = () => {
    if (!loading) {
      if (title) {
        return (
          <Text
            ag={Ag.Control1}
            color={color}
            style={{ marginLeft: startIcon ? 14 : 0, marginRight: endIcon ? 14 : 0 }}
          >
            {uppercase ? title.toUpperCase() : title}
          </Text>
        );
      }

      return null;
    }

    return <ActivityIndicator color={color} />;
  };

  return (
    <TouchableOpacity
      onPress={loading || disabled ? undefined : props.onPress}
      activeOpacity={disabled ? 1 : props.activeOpacity}
    >
      <View style={[buttonStyles, { opacity: disabled ? 0.5 : 1 }]}>
        {!loading && startIcon}
        {renderText()}
        {!loading && endIcon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  default: {
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  [ButtonType.Primary]: {
    backgroundColor: Colors.primary,
  },
  [`${ButtonType.Primary}_Text`]: {
    color: Colors.white,
  },

  [ButtonType.Secondary]: {
    backgroundColor: Colors.overlay,
  },
  [`${ButtonType.Secondary}_Text`]: {
    color: Colors.black,
  },

  [ButtonType.Flat]: {
    backgroundColor: Colors.transparent,
  },
  [`${ButtonType.Flat}_Text`]: {
    color: Colors.primary,
  },

  large: {
    height: 48,
  },
  medium: {
    height: 40,
  },
  small: {
    height: 32,
  },
});
