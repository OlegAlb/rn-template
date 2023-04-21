import { useRoute } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { SwitchWithText } from '../../../components/SwitchWithText';
import FormValidationHelper from '../../../helpers/FormValidationHelper';
import { useRootStore } from '../../../hooks/useRootStore';
import { AddressType, MainArrayFormFields } from '../../../modules/main/forms/AddressForm';
import { MainFormFields } from '../../../modules/main/forms/MainForm';
import { HomeDetailRouteProps } from '../../../navigation/types/HomeStackTypes';
import { Colors } from '../../../styles/Colors';

export const HomeDetailScreen = observer(() => {
  const { mainStore } = useRootStore();

  const route = useRoute<HomeDetailRouteProps>();
  const insets = useSafeAreaInsets();

  const [isActualAddress, setActualAddress] = useState<boolean>(false);
  const [isTemporaryAddress, setTemporaryAddress] = useState<boolean>(false);

  useEffect(() => {
    console.log('route params: ', route.params);

    return () => mainStore.resetMainForm();
  }, [mainStore, route.params]);

  const handleSendData = (data: any) => {
    mainStore.saveFormData(data);
  };

  const handleAddForm = (type: AddressType) => {
    mainStore.createFormList(type, MainArrayFormFields.type);
  };

  const handleRemoveForm = (type: AddressType) => {
    mainStore.removeFormList(type);
  };

  const handleChangeAddress = (key: MainArrayFormFields, value: any, type: AddressType) => {
    mainStore.changeAddressForm(key, value, type);
  };

  const handleChangeForm = (value: any, key: MainFormFields) => {
    mainStore.changeMainForm(key, value);
  };

  const handleActiveAddress = (value: boolean, type: AddressType) => {
    handleSetAddressAccordingType(value, type);

    if (value) {
      handleAddForm(type);
    } else {
      handleRemoveForm(type);
    }
  };

  const handleSetAddressAccordingType = (value: boolean, type: AddressType) => {
    switch (type) {
      case AddressType.actual: {
        setActualAddress(value);
        break;
      }

      case AddressType.temporary: {
        setTemporaryAddress(value);
        break;
      }
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
      }}
    >
      <Input
        isRequired
        style={styles.input}
        placeholder={'Email'}
        value={mainStore.mainForm.email}
        errorMessage={'Некорректный e-mail'}
        isValid={FormValidationHelper.isEmailValid(mainStore.mainForm.email)}
        onChangeText={text => handleChangeForm(text, MainFormFields.email)}
        containerStyle={styles.containerInput}
      />
      <Input
        style={styles.input}
        placeholder={'Last name'}
        value={mainStore.mainForm.lastName}
        onChangeText={text => handleChangeForm(text, MainFormFields.lastName)}
        containerStyle={styles.containerInput}
      />
      <Input
        style={styles.input}
        placeholder={'First name'}
        value={mainStore.mainForm.firstName}
        onChangeText={text => handleChangeForm(text, MainFormFields.firstName)}
        containerStyle={styles.containerInput}
      />
      <Input
        style={styles.input}
        placeholder={'Date of birthday'}
        value={mainStore.mainForm.dateOfBirthday}
        keyboardType="number-pad"
        onChangeText={text => handleChangeForm(text, MainFormFields.dateOfBirthday)}
        containerStyle={styles.containerInput}
      />

      <View style={styles.containerSection}>
        <SwitchWithText
          text={'Temporary address'}
          active={isTemporaryAddress}
          onValueChange={value => handleActiveAddress(value, AddressType.temporary)}
        />
        <SwitchWithText
          text={'Actual address'}
          active={isActualAddress}
          onValueChange={value => handleActiveAddress(value, AddressType.actual)}
        />
      </View>

      {mainStore.mainForm.address.map(item => {
        return (
          <View key={item.type}>
            <Input
              style={styles.input}
              placeholder={'Region'}
              value={item.region}
              onChangeText={text => handleChangeAddress(MainArrayFormFields.region, text, item.type!)}
              containerStyle={styles.containerInput}
            />
            <Input
              style={styles.input}
              placeholder={'City'}
              value={item.city}
              onChangeText={text => handleChangeAddress(MainArrayFormFields.city, text, item.type!)}
              containerStyle={styles.containerInput}
            />
          </View>
        );
      })}

      <Button
        title={'Submit'}
        onPress={handleSendData}
        disabled={!mainStore.mainForm.isFormValid(mainStore.mainForm)}
        style={styles.buttonForm}
      />
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottom: 20,
  },
  containerSection: {
    marginTop: 20,
  },
  containerInput: {
    marginTop: 20,
  },
  buttonForm: {
    marginTop: 10,
  },
});
