import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import AuthorList from './src/components/authors/AuthorList';
import {fetchAuthors} from './src/store/slices/authorSlice';
import {useAppDispatch, useAppSelector} from './src/store/hooks';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const reactiveStyles = StyleSheet.create({
    body: {
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
  });

  const authors = useAppSelector(state => state.author.list);
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
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <View style={reactiveStyles.body}>
              <Text>Hello World</Text>
              <AuthorList authors={authors} />
            </View>
          </ScrollView>
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
