import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  TopNavigation,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import {fetchAuthors} from './src/store/slices/authorSlice';
import {useAppDispatch} from './src/store/hooks';
import MainNavigator from './src/navigator/MainNavigator';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const dispatch = useAppDispatch();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#ccc',
  };

  useEffect(() => {
    console.log('Launched Version 0.1');
    dispatch(fetchAuthors());
  }, []);
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={isDarkMode ? eva.dark : eva.light}>
        <SafeAreaView style={{...backgroundStyle, ...styles.root}}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <TopNavigation title="MyApp" alignment="center" />
          <MainNavigator />
        </SafeAreaView>
      </ApplicationProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
