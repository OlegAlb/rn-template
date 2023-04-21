import { Nullable } from '../types/BaseTypes';
import IFormDataImage from './IFormDataImage';

import { Platform } from 'react-native';
import IFormDataDocument from './IFormDataDocument';

export default class FormDataFactory {
  static create(
    doc: IFormDataImage | IFormDataDocument,
    fileTitle: string = 'file',
    data: Nullable<any> = null,
  ): FormData {
    const formData = new FormData();

    formData.append(fileTitle, {
      uri: Platform.OS === 'ios' ? doc.uri?.replace('file://', '') : doc.uri,
      type: doc.type,
      name: (doc as any).name || (doc as any).fileName,
    });

    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
    }

    return formData;
  }
}
