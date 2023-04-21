import { Alert } from 'react-native';

export default class AlertHelper {
  static twoButtonsAlert = (
    title: string,
    message: string,
    okButtonName: string,
    okButtonAction: () => void,
    cancelButtonName: string,
    cancelButtonAction: () => void,
  ) => {
    return Alert.alert(
      title,
      message,
      [
        { text: cancelButtonName, onPress: cancelButtonAction, style: 'cancel' },
        {
          text: okButtonName,
          onPress: okButtonAction,
          style: 'default',
        },
      ],
      { cancelable: false },
    );
  };

  static oneButtonAlert = (title: string, message: string, buttonName: string, buttonAction: () => void) => {
    return Alert.alert(title, message, [{ text: buttonName, onPress: buttonAction, style: 'cancel' }], {
      cancelable: false,
    });
  };
}
