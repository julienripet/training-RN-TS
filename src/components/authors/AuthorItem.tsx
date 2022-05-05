import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Author} from '../../types/authors.type';
import {Card} from '@ui-kitten/components';

export default function AuthorItem({author}: {author: Author}) {
  return (
    <Card style={styles.root}>
      <Text>
        {author.firstname} {author.lastname}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  root: {},
});
