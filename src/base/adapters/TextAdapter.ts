import { Text, TextInput } from 'react-native';

/**
 *  Отключаем возможность увеличения размеров текста (из настроек устройства).
 *
 *  Данный способ может не помочь вам с Alert, PickerIOS, DatePickerIOS, TabBarIOS, SegmentedControlIOS так как
 *  эти компоненты не полагаются на Text компонент и используют нативную отрисовку.
 */

interface IDefaultTextProps extends Text {
  defaultProps?: { allowFontScaling?: boolean };
}

interface IDefaultInputProps extends TextInput {
  defaultProps?: { allowFontScaling?: boolean };
}

(Text as unknown as IDefaultTextProps).defaultProps = (Text as unknown as IDefaultTextProps).defaultProps || {};
(Text as unknown as IDefaultTextProps).defaultProps!.allowFontScaling = false;

(TextInput as unknown as IDefaultInputProps).defaultProps =
  (TextInput as unknown as IDefaultInputProps).defaultProps || {};
(TextInput as unknown as IDefaultInputProps).defaultProps!.allowFontScaling = false;
