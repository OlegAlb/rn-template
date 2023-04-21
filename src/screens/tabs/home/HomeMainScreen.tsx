import { observer } from 'mobx-react-lite';
import React, { useRef, useState } from 'react';
import { Modal, ScrollView, StyleSheet, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Navigation from '../../../base/Navigation';
import { Button, ButtonType } from '../../../components/Button';
import { Divider } from '../../../components/Divider';
import { Ag, Text } from '../../../components/Text';
import { CloseIcon } from '../../../components/icons/CloseIcon';
import { SwipeableModal } from '../../../components/modals/SwipeableModal';
import { useRootStore } from '../../../hooks/useRootStore';
import { Screens } from '../../../navigation/consts/screens';
import { HomeStackParamList } from '../../../navigation/types/HomeStackTypes';
import { Colors } from '../../../styles/Colors';

interface HomeMainProps {}

export const HomeMainScreen = observer(({}: HomeMainProps) => {
  const { toastStore } = useRootStore();

  const modalizeRef = useRef<Modalize>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const insets = useSafeAreaInsets();

  const handleOnPress = () => {
    Navigation.navigate<HomeStackParamList>(Screens.HOME_DETAIL);
  };

  const handleOnPressWithParams = () => {
    Navigation.navigate<HomeStackParamList>(Screens.HOME_DETAIL, { message: 'Тестовое сообщение' });
  };

  const handleShowToastMessage = () => {
    toastStore.showMessage('Тестовое сообщение');
  };

  const handleOpenModal = () => {
    modalizeRef.current?.open();
  };

  const handleToggleIosModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.containerScroll,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <Button title={'Go to forms'} onPress={handleOnPress} style={styles.block} />
      <Button title={'Go to forms with params'} onPress={handleOnPressWithParams} style={styles.block} />
      <Button title={'IOS page sheet'} onPress={handleToggleIosModal} />

      <Divider marginTop={10} marginBottom={10} marginHorizontal={-16} />

      <Button title="Open bottom modal" onPress={handleOpenModal} style={styles.block} />
      <Button title="Show toast message" onPress={handleShowToastMessage} style={styles.block} />

      <SwipeableModal modalizeRef={modalizeRef}>
        <View style={styles.containerModalContent}>
          <Text ag={Ag.Body1}>Modal opened</Text>
          <Text ag={Ag.Body1}>Swipe down on the modal to close.</Text>
        </View>
      </SwipeableModal>

      <Modal presentationStyle={'pageSheet'} visible={showModal} animationType={'slide'} statusBarTranslucent={false}>
        <Button
          startIcon={<CloseIcon />}
          type={ButtonType.Flat}
          onPress={handleToggleIosModal}
          style={styles.buttonClose}
        />
      </Modal>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  containerScroll: {
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  containerModalContent: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  buttonClose: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    marginBottom: 20,
  },
});
