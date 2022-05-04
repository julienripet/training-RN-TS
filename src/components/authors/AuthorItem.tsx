import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import {Author} from '../../types/authors.type';

export default function AuthorItem({author}: {author: Author}) {
  return (
    <View style={styles.root}>
      <Text>{author.firstname}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
