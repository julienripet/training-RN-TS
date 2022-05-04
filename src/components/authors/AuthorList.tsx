import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Author} from '../../types/authors.type';
import AuthorItem from './AuthorItem';

export default function AuthorList({authors}: {authors: Array<Author>}) {
  return (
    <View style={styles.root}>
      {authors.map((author: Author) => (
        <AuthorItem author={author} key={author.id.toString()} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
