import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { Loader } from './Loader';
import { Ag, Text } from './Text';
import { Button, ButtonType } from './Button';

interface IDataShowerProps {
  success: boolean;
  loading: boolean;
  children: ReactNode;
  updateAction?: () => void;
  flex?: number;
}

export const DataShower = ({ success, loading, children, updateAction, flex }: IDataShowerProps) => {
  if (loading) {
    return (
      <View style={[styles.loadingContainer, flex !== undefined ? { flex, minHeight: 56 } : undefined]}>
        <Loader />
      </View>
    );
  }

  if (!success) {
    return (
      <View style={[styles.errorContainer, flex !== undefined ? { flex } : undefined]}>
        <Text ag={Ag.Body1}>Что-то пошло не так</Text>
        {updateAction && (
          <Button title="Обновить" onPress={updateAction} type={ButtonType.Flat} style={styles.button} />
        )}
      </View>
    );
  }

  return <View style={[styles.container, flex !== undefined ? { flex } : undefined]}>{children}</View>;
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 8,
  },
});
