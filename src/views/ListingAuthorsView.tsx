import {ScrollView, StyleSheet, useColorScheme, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../store/hooks';
import AuthorList from '../components/authors/AuthorList';
import {Text} from '@ui-kitten/components';

const ListingAuthorsView = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#333' : '#ccc',
  };

  const reactiveStyles = StyleSheet.create({
    body: {
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
  });

  const authors = useAppSelector(state => state.author.list);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View style={reactiveStyles.body}>
        <Text>Hello World</Text>
        <AuthorList authors={authors} />
      </View>
    </ScrollView>
  );
};

export default ListingAuthorsView;

const styles = StyleSheet.create({});
