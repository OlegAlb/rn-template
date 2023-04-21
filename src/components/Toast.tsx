import { observer } from 'mobx-react-lite';
import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useRootStore } from '../hooks/useRootStore';
import { Colors } from '../styles/Colors';
import { Ag, Text } from './Text';

export const Toast = observer(() => {
  const { toastStore } = useRootStore();

  const insets = useSafeAreaInsets();

  const bottomPosition = toastStore.toast.interpolate({
    inputRange: [0, 1],
    outputRange: [56, -32 - insets.bottom],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.containerToast,
        {
          transform: [{ translateY: bottomPosition }],
        },
      ]}
    >
      <Text ag={Ag.Body2} style={styles.textToast}>
        {toastStore.message}
      </Text>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  containerToast: {
    left: 16,
    right: 16,
    bottom: 0,
    borderRadius: 8,
    position: 'absolute',
    backgroundColor: Colors.black,
  },
  textToast: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    color: Colors.white,
  },
});
