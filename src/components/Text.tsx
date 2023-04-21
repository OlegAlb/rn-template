import React from 'react';
import { StyleSheet, Text as RNText, TextProps } from 'react-native';

import { Colors } from '../styles/Colors';
import { Fonts } from '../styles/Fonts';

// @TODO: think about fontFamily & colors

export enum Ag {
  H1 = 'headline1',
  H2 = 'headline2',
  H3 = 'headline3',
  H3Reg = 'headline3regular',
  Subtitle1 = 'subtitle1',
  Subtitle2 = 'subtitle2',
  Body1 = 'body1',
  Body2 = 'body2',
  Caption1 = 'caption1',
  Caption2 = 'caption2',
  Control1 = 'control1',
  Control1Reg = 'control1regular',
  Control2 = 'control2',
}

export enum Align {
  Auto = 'auto',
  Left = 'left',
  Right = 'right',
  Center = 'center',
  Justify = 'justify',
}

interface IText extends TextProps {
  ag: Ag;
  children?: string | React.ReactNode[];
  align?: Align;
  color?: string;
  fontFamily?: string;
}

export const Text = (props: IText) => {
  return (
    <RNText
      {...props}
      style={[
        styles[props.ag],
        {
          color: props.color || Colors.black,
          textAlign: props.align || Align.Auto,
          fontFamily: props.fontFamily || Fonts.primary,
        },
        props.style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  [Ag.H1]: {
    fontSize: 34,
    lineHeight: 36,
    fontWeight: '700',
    letterSpacing: 0,
  },
  [Ag.H2]: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '500',
    letterSpacing: 0.18,
  },
  [Ag.H3]: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    letterSpacing: 0.15,
  },
  [Ag.H3Reg]: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: 0.15,
  },
  [Ag.Subtitle1]: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    letterSpacing: 0.15,
  },
  [Ag.Subtitle2]: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  [Ag.Body1]: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  [Ag.Body2]: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    letterSpacing: 0.25,
  },
  [Ag.Caption1]: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    letterSpacing: 0.4,
  },
  [Ag.Caption2]: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  [Ag.Control1]: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    letterSpacing: 0.15,
  },
  [Ag.Control1Reg]: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: 0.15,
  },
  [Ag.Control2]: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
});
