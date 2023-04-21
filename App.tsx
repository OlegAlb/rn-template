// import * as Sentry from '@sentry/react-native';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
// import BootSplash from 'react-native-bootsplash';
import FlashMessage from 'react-native-flash-message';
import { Host } from 'react-native-portalize';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import VersionCheck from 'react-native-version-check';
import 'reflect-metadata';

import './src/base/adapters/KeyboardManagerAdapter';
import './src/base/adapters/TextAdapter';
import { AppVersionModal } from './src/components/AppVersionModal';
import { Toast } from './src/components/Toast';
import Navigator from './src/navigation/Navigator';

// if (!__DEV__) {
//   Sentry.init({
//     dsn: 'https://dsn',
//   });
// }

enableScreens();

const App = observer(() => {
  const [isAppVersionModalVisible, setIsAppVersionModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      // await BootSplash.hide();
      await handleVersionCheck();
    })();
  }, []);

  //При реализации - удалить объект options, внутри needUpdate, для запуска механизма проверки версий
  const handleVersionCheck = async () => {
    const versionCheck = await VersionCheck.needUpdate({ currentVersion: '1.0.0', latestVersion: '1.0.0' });

    if (versionCheck.isNeeded) {
      handleAppVersionModalVisibility();
    }
  };

  const handleAppVersionModalVisibility = () => {
    setIsAppVersionModalVisible(!isAppVersionModalVisible);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <Host>
        <Navigator />
      </Host>
      <FlashMessage position="bottom" />
      <Toast />
      <AppVersionModal isVisible={isAppVersionModalVisible} />
    </SafeAreaProvider>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
