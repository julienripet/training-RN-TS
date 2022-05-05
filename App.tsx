import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

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
    <SafeAreaView style={backgroundStyle}>
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
  );
};

// const styles = StyleSheet.create({
// });

export default App;
