import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import AbstractApiRepository from '../../../base/api/AbstractApiRepository';

export default class AuthApiRepository extends AbstractApiRepository {
  registerUser = (postData: any) => {
    return this.apiClient.post({
      url: `/auth/registration`,
      data: postData,
      config: {
        headers: { 'Content-Type': 'multipart/form-data' },
      },
    });
  };

  login = (token: string, code: string) => {
    return this.apiClient.post({
      url: `/auth/login`,
      data: {
        token,
        code,
        deviceId: DeviceInfo.getUniqueId(),
        deviceType: Platform.OS,
      },
    });
  };

  logout = () => {
    return this.apiClient.post({
      url: `/auth/logout`,
    });
  };
}
