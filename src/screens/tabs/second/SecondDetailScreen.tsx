import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SecondDetailProps {}

export const SecondDetailScreen = observer(({}: SecondDetailProps) => {
  return (
    <View>
      <Text>Second detail Screen</Text>
    </View>
  );
});

const styles = StyleSheet.create({});
