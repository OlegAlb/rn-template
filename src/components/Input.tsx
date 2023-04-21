import React, { useEffect, useRef, useState } from 'react';
import { StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import Animated, { EasingNode, interpolateNode, timing } from 'react-native-reanimated';

import { Colors } from '../styles/Colors';
import { Ag, Text } from './Text';

interface IInputProps extends TextInputProps {
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  errorMessage?: string;
  isValid?: boolean;
  isRequired?: boolean;
  backgroundColor?: string | any;
  onChangeText: (value: string) => void;
}

export const Input = (props: IInputProps) => {
  const hasValue = props.value && String(props.value).length > 0;

  const [isFocused, setIsFocused] = useState(Boolean(props.autoFocus || hasValue));
  const [isSetValue, setIsSetValue] = useState<boolean>(false);

  const labelAnimation = useRef(new Animated.Value(props.autoFocus || hasValue ? 1 : 0)).current;

  useEffect(() => {
    setTimeout(() => {
      timing(labelAnimation, {
        toValue: isFocused || hasValue ? 1 : 0,
        duration: 70,
        easing: EasingNode.sin,
      }).start();
    }, 0);
  }, [isFocused, hasValue]);

  const renderErrorMessage = () => {
    if (props.isRequired && props.value?.length === 0 && isSetValue) {
      return (
        <View style={styles.errorWrap}>
          <Text ag={Ag.Body1} color={Colors.danger}>
            This field is required
          </Text>
        </View>
      );
    }

    if (!props.isValid && props.value?.length! > 0 && props.errorMessage?.trim().length! > 0) {
      return (
        <View style={styles.errorWrap}>
          <Text ag={Ag.Body1} color={Colors.danger}>
            {props.errorMessage}
          </Text>
        </View>
      );
    }

    return null;
  };

  return (
    <>
      <View style={[styles.container, props.containerStyle]}>
        <View pointerEvents={'none'} style={[StyleSheet.absoluteFill, styles.label]}>
          <Animated.View
            style={{
              transform: [
                {
                  translateX: interpolateNode(labelAnimation, {
                    inputRange: [0, 1],
                    outputRange: [0, 8],
                  }),
                },
                {
                  translateY: interpolateNode(labelAnimation, {
                    inputRange: [0, 1],
                    outputRange: [0, -30],
                  }),
                },
              ],
            }}
          >
            <Animated.View
              style={[
                styles.labelBackLine,
                {
                  opacity: interpolateNode(labelAnimation, {
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ]}
            />
            <Animated.Text
              style={{
                fontSize: interpolateNode(labelAnimation, {
                  inputRange: [0, 1],
                  outputRange: [16, 12],
                }),
                lineHeight: 18,
              }}
            >
              {props.placeholder}
            </Animated.Text>
          </Animated.View>
        </View>
        <View style={styles.content} pointerEvents={props.editable === false ? 'none' : 'auto'}>
          <TextInput
            {...props}
            onChangeText={value => {
              props.onChangeText(value);
              setIsSetValue(true);
            }}
            style={styles.input}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            placeholder={''}
            selectionColor={Colors.cursor}
          />
          {props.rightComponent ? <View style={styles.rightComponentWrap}>{props.rightComponent}</View> : null}
        </View>
      </View>
      {renderErrorMessage()}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.gray600,
    height: 56,
    position: 'relative',
    backgroundColor: Colors.white,
  },
  label: {
    zIndex: 1,
    position: 'absolute',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  labelBackLine: {
    position: 'absolute',
    top: 10,
    left: -5,
    right: -5,
    height: 2,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    overflow: 'hidden',
    borderRadius: 4,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    margin: 0,
    paddingVertical: 12,
    color: Colors.black,
    fontSize: 16,
    lineHeight: 18,
  },
  errorWrap: {
    marginTop: 4,
    marginHorizontal: 12,
    alignSelf: 'flex-start',
  },
  rightComponentWrap: {
    justifyContent: 'center',
    paddingRight: 16,
  },
});
