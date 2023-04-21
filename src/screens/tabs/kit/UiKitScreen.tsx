import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Button, ButtonType } from '../../../components/Button';
import { Checkbox } from '../../../components/Checkbox';
import { Divider } from '../../../components/Divider';
import { Loader } from '../../../components/Loader';
import { Switch } from '../../../components/Switch';
import { SwitchWithText } from '../../../components/SwitchWithText';
import { Ag, Text } from '../../../components/Text';
import { Colors } from '../../../styles/Colors';

export const UiKitScreen = () => {
  const [checkbox, setCheckbox] = useState<boolean>(false);

  const handleChangeCheckbox = (value: boolean) => {
    setCheckbox(value);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: Colors.white,
      }}
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <Text ag={Ag.H2}>Typography</Text>
          <Divider marginTop={10} marginBottom={10} marginHorizontal={-16} />
          <Text ag={Ag.H1}>headline 1</Text>
          <Text ag={Ag.H2}>headline 2</Text>
          <Text ag={Ag.H3}>headline 3</Text>
          <Text ag={Ag.H3Reg}>headline 3 # regular</Text>
          <Text ag={Ag.Subtitle1}>subtitle 1</Text>
          <Text ag={Ag.Subtitle2}>subtitle 2</Text>
          <Text ag={Ag.Body1}>body 1</Text>
          <Text ag={Ag.Body2}>body 2</Text>
          <Text ag={Ag.Caption1}>caption 1</Text>
          <Text ag={Ag.Caption2}>caption 2</Text>
          <Text ag={Ag.Control1}>control 1</Text>
          <Text ag={Ag.Control1Reg}>control 1 # regular</Text>
          <Text ag={Ag.Control2}>control 2 </Text>
        </View>

        <View style={styles.box}>
          <Text ag={Ag.H2}>Buttons</Text>
          <Divider marginTop={10} marginBottom={10} marginHorizontal={-16} />
          <Button title="Primary" startIcon={<View style={styles.icon} />} style={{ marginBottom: 10 }} />
          <Button
            title="Primary Disabled"
            startIcon={<View style={styles.icon} />}
            style={{ marginBottom: 10 }}
            disabled
          />
          <Button
            title="Secondary"
            type={ButtonType.Secondary}
            startIcon={<View style={[styles.icon, { borderColor: Colors.black }]} />}
            style={{ marginBottom: 10 }}
          />
          <Button
            title="Secondary Disabled"
            type={ButtonType.Secondary}
            startIcon={<View style={[styles.icon, { borderColor: Colors.black }]} />}
            style={{ marginBottom: 10 }}
            disabled
          />
          <Button
            title="Flat"
            type={ButtonType.Flat}
            startIcon={<View style={[styles.icon, { borderColor: Colors.primary }]} />}
            style={{ marginBottom: 10 }}
          />
          <Button
            title="Flat Disabled"
            type={ButtonType.Flat}
            startIcon={<View style={[styles.icon, { borderColor: Colors.primary }]} />}
            style={{ marginBottom: 10 }}
            disabled
          />
        </View>

        <View style={styles.box}>
          <View style={styles.row}>
            <Switch active onValueChange={() => {}} />
            <Switch active={false} onValueChange={() => {}} />
            <Checkbox value={checkbox} onChange={handleChangeCheckbox} />
          </View>
          <Divider marginTop={10} marginBottom={10} marginHorizontal={-16} />
          <SwitchWithText text="Some text" active onValueChange={() => {}} />
          <Divider marginTop={10} marginBottom={10} marginHorizontal={-16} />
          <Loader />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.white,
  },
  box: {
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 4,
    borderStyle: 'dashed',
  },
  icon: {
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 10,
    width: 20,
    height: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
