import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import MainNavigator from './src/navigator/MainNavigator';
import {Root as AlertRoot, Toast} from 'react-native-alert-notification';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#ccc',
  };

  return (
    <AlertRoot
      toastConfig={{
        autoClose: 2500,
      }}>
      <NavigationContainer>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={isDarkMode ? eva.dark : eva.light}>
          <SafeAreaView style={{...backgroundStyle, ...styles.root}}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <MainNavigator />
          </SafeAreaView>
        </ApplicationProvider>
      </NavigationContainer>
    </AlertRoot>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
